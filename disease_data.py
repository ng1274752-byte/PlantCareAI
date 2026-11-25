def build_disease_info(class_names):

    plants = {
        "Apple": "Apple",
        "Blueberry": "Blueberry",
        "Cherry_(including_sour)": "Cherry",
        "Corn_(maize)": "Maize",
        "Grape": "Grape",
        "Orange": "Orange",
        "Peach": "Peach",
        "Pepper,_bell": "Bell Pepper",
        "Potato": "Potato",
        "Raspberry": "Raspberry",
        "Soybean": "Soybean",
        "Squash": "Squash",
        "Strawberry": "Strawberry",
        "Tomato": "Tomato"
    }

    diseases = {
        "Apple_scab": (
            "Apple Scab",
            "Remove fallen infected leaves and improve air circulation."
        ),
        "Black_rot": (
            "Black Rot",
            "Remove infected fruit and dead plant material. Consult an agricultural expert."
        ),
        "Cedar_apple_rust": (
            "Cedar Apple Rust",
            "Monitor nearby juniper plants and consult an expert about disease management."
        ),
        "Powdery_mildew": (
            "Powdery Mildew",
            "Improve ventilation, reduce overcrowding and monitor affected leaves."
        ),
        "Cercospora_leaf_spot Gray_leaf_spot": (
            "Gray Leaf Spot",
            "Rotate crops, manage infected crop residue and use resistant varieties."
        ),
        "Common_rust_": (
            "Common Rust",
            "Monitor disease severity and consider resistant varieties."
        ),
        "Northern_Leaf_Blight": (
            "Northern Leaf Blight",
            "Rotate crops and manage infected crop residue."
        ),
        "Esca_(Black_Measles)": (
            "Esca (Black Measles)",
            "Consult a grapevine specialist. Avoid unnecessary pruning wounds."
        ),
        "Leaf_blight_(Isariopsis_Leaf_Spot)": (
            "Leaf Blight",
            "Improve air circulation and manage infected plant debris."
        ),
        "Haunglongbing_(Citrus_greening)": (
            "Citrus Greening",
            "Do not propagate affected plants. Contact a local agricultural authority promptly."
        ),
        "Bacterial_spot": (
            "Bacterial Spot",
            "Avoid overhead watering and disinfect gardening tools."
        ),
        "Early_blight": (
            "Early Blight",
            "Remove affected leaves, rotate crops and avoid splashing soil onto leaves."
        ),
        "Late_blight": (
            "Late Blight",
            "Isolate affected plants and consult an agricultural expert promptly."
        ),
        "Leaf_scorch": (
            "Leaf Scorch",
            "Improve air circulation and remove infected plant debris."
        ),
        "Leaf_Mold": (
            "Leaf Mold",
            "Reduce humidity and improve ventilation around plants."
        ),
        "Septoria_leaf_spot": (
            "Septoria Leaf Spot",
            "Remove affected lower leaves and avoid overhead watering."
        ),
        "Spider_mites Two-spotted_spider_mite": (
            "Spider Mite Infestation",
            "Inspect leaf undersides, isolate affected plants and seek suitable mite control."
        ),
        "Target_Spot": (
            "Target Spot",
            "Improve air circulation and reduce prolonged leaf wetness."
        ),
        "Tomato_Yellow_Leaf_Curl_Virus": (
            "Yellow Leaf Curl Virus",
            "Manage whiteflies and consult an expert about removing infected plants."
        ),
        "Tomato_mosaic_virus": (
            "Mosaic Virus",
            "Disinfect tools, avoid handling healthy plants after infected plants and seek expert advice."
        )
    }

    results = {}

    for category in class_names:
        plant, disease = category.split("___", 1)
        plant_name = plants[plant]

        if disease == "healthy":
            condition = f"Apparently Healthy {plant_name} Leaf"
            suggestion = (
                "Maintain proper watering, sunlight, drainage and regular monitoring."
            )
        else:
            disease_name, suggestion = diseases[disease]
            condition = f"{plant_name} {disease_name}"

        results[category] = {
            "condition": condition,
            "suggestion": suggestion
        }

    return results
