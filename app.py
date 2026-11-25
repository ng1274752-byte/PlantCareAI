
from flask import Flask, render_template, request, jsonify
from ai_edge_litert.interpreter import Interpreter
from threading import Lock
import numpy as np
from PIL import Image, ImageOps
import json
from pathlib import Path

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024

BASE_DIR = Path(__file__).resolve().parent

# Load trained AI model
interpreter = Interpreter(
    model_path=str(BASE_DIR / "model/plant_model.tflite"),
    num_threads=1
)

interpreter.allocate_tensors()
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()
prediction_lock = Lock()

# Load classification categories
with open(BASE_DIR / "model/class_names.json") as file:
    class_names = json.load(file)

# Plant disease knowledge base
disease_info = {
    "Tomato___Bacterial_spot": {
        "condition": "Tomato Bacterial Spot",
        "suggestion": "Avoid overhead watering, remove severely affected leaves and disinfect gardening tools."
    },

    "Tomato___Early_blight": {
        "condition": "Tomato Early Blight",
        "suggestion": "Remove affected leaves, improve air circulation and avoid splashing soil onto leaves."
    },

    "Tomato___Late_blight": {
        "condition": "Tomato Late Blight",
        "suggestion": "Isolate the affected plant, avoid wetting leaves and consult a local agricultural expert promptly."
    },

    "Tomato___healthy": {
        "condition": "Apparently Healthy Tomato Leaf",
        "suggestion": "Maintain proper watering, sunlight, drainage and regular monitoring."
    }
}


from disease_data import build_disease_info

disease_info = {
    **build_disease_info(class_names),
    **disease_info
}


# Text-based symptom analysis
def analyze_symptoms(symptoms):
    symptoms = symptoms.lower()

    regional_words = {
        "yellow": [
            "ಹಳದಿ", "पीला", "पीली", "पीलापन",
            "పసుపు", "மஞ்சள்"
        ],
        "brown": [
            "ಕಂದು", "भूरा", "भूरी",
            "గోధుమ", "பழுப்பு"
        ],
        "spots": [
            "ಚುಕ್ಕೆ", "ಕಲೆ", "धब्बे", "धब्बा",
            "మచ్చ", "புள்ளி"
        ],
        "white": [
            "ಬಿಳಿ", "सफेद", "తెలుపు", "வெள்ளை"
        ],
        "powder": [
            "ಪುಡಿ", "पाउडर", "పొడి", "தூள்"
        ],
        "dry": [
            "ಒಣ", "सूखा", "सूखी", "सूख",
            "ఎండ", "உலர்", "காய்ந்த"
        ],
        "wilting": [
            "ಬಾಡು", "ಬಾಡಿದ", "मुरझा",
            "వాడి", "வாடி"
        ],
        "healthy": [
            "ಆರೋಗ್ಯಕರ", "स्वस्थ",
            "ఆరోగ్యకర", "ஆரோக்கிய"
        ]
    }

    original_symptoms = symptoms

    for english, words in regional_words.items():
        if any(word in original_symptoms for word in words):
            symptoms += " " + english


    if "yellow" in symptoms:
        return {
            "condition": "Possible watering or nutrient problem",
            "suggestion": "Check soil moisture and drainage. Avoid overwatering."
        }

    elif "brown" in symptoms or "spots" in symptoms:
        return {
            "condition": "Possible leaf spot or fungal disease",
            "suggestion": "Inspect affected leaves and improve air circulation."
        }

    elif "white" in symptoms or "powder" in symptoms:
        return {
            "condition": "Possible powdery mildew",
            "suggestion": "Improve ventilation and avoid wetting leaves."
        }

    elif "dry" in symptoms or "wilting" in symptoms:
        return {
            "condition": "Possible water stress",
            "suggestion": "Check soil moisture and adjust watering."
        }

    elif "healthy" in symptoms:
        return {
            "condition": "Possibly healthy plant",
            "suggestion": "Maintain proper sunlight, watering and nutrition."
        }

    return {
        "condition": "Unable to identify the problem",
        "suggestion": "Please describe more plant symptoms."
    }


# Home page
@app.route("/")
def home():
    return render_template("index.html")


# Scanner page
@app.route("/scan")
def scan():
    return render_template("scan.html")


# Assistant page
@app.route("/assistant")
def assistant():
    return render_template("assistant.html")


@app.route("/analyze", methods=["POST"])
def analyze():
    symptoms = request.form.get("symptoms", "").strip()

    if not symptoms:
        return jsonify({
            "condition": "No symptoms entered",
            "suggestion": "Please describe your plant symptoms."
        }), 400

    return jsonify(analyze_symptoms(symptoms))


# AI image classification
@app.route("/predict", methods=["POST"])
def predict():

    if "image" not in request.files:
        return jsonify({
            "condition": "No image uploaded",
            "suggestion": "Please upload a leaf image."
        }), 400

    file = request.files["image"]

    try:
        # Preprocess uploaded image
        image = Image.open(file.stream)
        image = ImageOps.exif_transpose(image)
        image = image.convert("RGB")
        image = image.resize((128, 128))

        image_array = np.array(image, dtype=np.float32)
        image_array = np.expand_dims(image_array, axis=0)

        # AI prediction
        with prediction_lock:
            interpreter.set_tensor(
                input_details[0]["index"],
                image_array
            )
            interpreter.invoke()
            predictions = interpreter.get_tensor(
                output_details[0]["index"]
            )[0]

        index = int(np.argmax(predictions))
        confidence = float(predictions[index]) * 100

        predicted_class = class_names[index]

        if confidence < 60:
            return jsonify({
                "condition": "Uncertain prediction",
                "suggestion": "Upload a clearer leaf image.",
                "confidence": round(confidence, 2)
            })

        result = disease_info.get(predicted_class, {
            "condition": predicted_class,
            "suggestion": "Consult a plant care expert."
        })

        return jsonify({
            "condition": result["condition"],
            "suggestion": result["suggestion"],
            "confidence": round(confidence, 2)
        })

    except Exception:
        app.logger.exception("Image prediction failed")

        return jsonify({
            "condition": "Image analysis failed",
            "suggestion": "Please upload a valid leaf image."
        }), 400


# Enable laptop and mobile access

@app.route("/service-worker.js")
def service_worker():
    return app.send_static_file("service-worker.js")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
