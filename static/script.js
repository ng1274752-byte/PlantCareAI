
let selectedImage = null;

// Display analysis results
function showResult(condition, suggestion) {
    const result = document.getElementById("result");

    if (!result) return;

    result.hidden = false;

    document.getElementById("condition").textContent = condition;
    document.getElementById("suggestion").textContent = suggestion;

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Handle camera and gallery images
function handleImage(file) {
    if (!file) return;

    if (file.type && !file.type.startsWith("image/")) {
        alert(translateText("Please select a valid image."));
        return;
    }

    if (file.size > 9 * 1024 * 1024) {
        alert(translateText("Please select an image smaller than 9 MB."));
        return;
    }

    selectedImage = file;

    const preview = document.getElementById("preview");
    const reader = new FileReader();

    reader.onload = function (event) {
        preview.src = event.target.result;
        preview.hidden = false;
    };

    reader.readAsDataURL(file);

    document.getElementById("result").hidden = true;
}

// Gallery access
const galleryInput = document.getElementById("leafImage");

if (galleryInput) {
    galleryInput.addEventListener("change", function () {
        handleImage(this.files[0]);
    });
}

// Mobile camera access
const cameraInput = document.getElementById("cameraInput");

if (cameraInput) {
    cameraInput.addEventListener("change", function () {
        handleImage(this.files[0]);
    });
}

// AI leaf image analysis
async function analyzeImage() {

    if (!selectedImage) {
        alert(translateText("Please take a photo or upload a leaf image."));
        return;
    }

    const button = document.querySelector(
        ".scanner-card > button"
    );

    button.disabled = true;
    button.textContent = translateText("Analyzing your plant...");

    showResult(
        "Analyzing your leaf...",
        "Please wait while the AI checks your plant."
    );

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
        const response = await fetch("/predict", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        let condition = data.condition;

        if (data.confidence !== undefined) {
            condition += " | Model confidence: "
                + data.confidence + "%";
        }

        showResult(condition, data.suggestion);

    } catch (error) {
        showResult(
            "Analysis failed",
            "Please check your connection and try again."
        );
    } finally {
        button.disabled = false;
        button.textContent = translateText("Analyze Leaf");
    }
}

// Plant Care Assistant
async function analyzeSymptoms() {

    const symptoms = document
        .getElementById("symptoms")
        .value.trim();

    if (!symptoms) {
        alert(translateText("Please describe your plant symptoms."));
        return;
    }

    const button = document.querySelector(
        ".assistant-card > button"
    );

    button.disabled = true;
    button.textContent = translateText("Checking symptoms...");

    showResult(
        "Understanding your plant...",
        "Please wait for care suggestions."
    );

    const formData = new FormData();
    formData.append("symptoms", symptoms);

    try {
        const response = await fetch("/analyze", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        showResult(data.condition, data.suggestion);

    } catch (error) {
        showResult(
            "Connection error",
            "Please check whether the server is running."
        );
    } finally {
        button.disabled = false;
        button.textContent = translateText("Get Care Suggestions →");
    }
}
