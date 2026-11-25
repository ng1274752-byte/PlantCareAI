const languages = {
    en: {},
    kn: {
        "Home": "ಮುಖಪುಟ",
        "Scan": "ಸ್ಕ್ಯಾನ್",
        "Assistant": "ಸಹಾಯಕ",
        "Grow with intelligence": "ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಬೆಳೆಸಿ",
        "Healthy plants, happy life.": "ಆರೋಗ್ಯಕರ ಸಸ್ಯಗಳು, ಸಂತೋಷದ ಜೀವನ.",
        "Plant Scanner": "ಸಸ್ಯ ಸ್ಕ್ಯಾನರ್",
        "Plant Assistant": "ಸಸ್ಯ ಸಹಾಯಕ",
        "Scan your plant →": "ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ →",
        "Scan your plant.": "ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
        "Analyze Leaf": "ಎಲೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
        "📷 Take a Photo": "📷 ಫೋಟೋ ತೆಗೆಯಿರಿ",
        "Upload from Gallery": "ಗ್ಯಾಲರಿಯಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        "Analysis Result": "ವಿಶ್ಲೇಷಣೆಯ ಫಲಿತಾಂಶ",
        "Plant Care Assistant.": "ಸಸ್ಯ ಆರೈಕೆ ಸಹಾಯಕ.",
        "Leaf Image Analysis": "ಎಲೆಯ ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ",
        "Get Care Suggestions →": "ಆರೈಕೆ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ →",
        "← Back to Home": "← ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ"
    },
    hi: {
        "Home": "होम",
        "Scan": "स्कैन",
        "Assistant": "सहायक",
        "Grow with intelligence": "बुद्धिमत्ता के साथ उगाएं",
        "Healthy plants, happy life.": "स्वस्थ पौधे, खुशहाल जीवन।",
        "Plant Scanner": "पौधा स्कैनर",
        "Plant Assistant": "पौधा सहायक",
        "Scan your plant →": "अपने पौधे को स्कैन करें →",
        "Scan your plant.": "अपने पौधे को स्कैन करें।",
        "Analyze Leaf": "पत्ती का विश्लेषण करें",
        "📷 Take a Photo": "📷 फोटो लें",
        "Upload from Gallery": "गैलरी से अपलोड करें",
        "Analysis Result": "विश्लेषण परिणाम",
        "Plant Care Assistant.": "पौधों की देखभाल सहायक।",
        "Leaf Image Analysis": "पत्ती की तस्वीर का विश्लेषण",
        "Get Care Suggestions →": "देखभाल के सुझाव प्राप्त करें →",
        "← Back to Home": "← होम पर वापस जाएं"
    },
    te: {
        "Home": "హోమ్",
        "Scan": "స్కాన్",
        "Assistant": "సహాయకుడు",
        "Grow with intelligence": "తెలివిగా పెంచండి",
        "Healthy plants, happy life.": "ఆరోగ్యకరమైన మొక్కలు, సంతోషకరమైన జీవితం.",
        "Plant Scanner": "మొక్కల స్కానర్",
        "Plant Assistant": "మొక్కల సహాయకుడు",
        "Scan your plant →": "మీ మొక్కను స్కాన్ చేయండి →",
        "Scan your plant.": "మీ మొక్కను స్కాన్ చేయండి.",
        "Analyze Leaf": "ఆకును విశ్లేషించండి",
        "📷 Take a Photo": "📷 ఫోటో తీయండి",
        "Upload from Gallery": "గ్యాలరీ నుండి అప్‌లోడ్ చేయండి",
        "Analysis Result": "విశ్లేషణ ఫలితం",
        "Plant Care Assistant.": "మొక్కల సంరక్షణ సహాయకుడు.",
        "Leaf Image Analysis": "ఆకు చిత్ర విశ్లేషణ",
        "Get Care Suggestions →": "సంరక్షణ సూచనలు పొందండి →",
        "← Back to Home": "← హోమ్‌కు తిరిగి వెళ్ళండి"
    },
    ta: {
        "Home": "முகப்பு",
        "Scan": "ஸ்கேன்",
        "Assistant": "உதவியாளர்",
        "Grow with intelligence": "அறிவுடன் வளருங்கள்",
        "Healthy plants, happy life.": "ஆரோக்கியமான தாவரங்கள், மகிழ்ச்சியான வாழ்க்கை.",
        "Plant Scanner": "தாவர ஸ்கேனர்",
        "Plant Assistant": "தாவர உதவியாளர்",
        "Scan your plant →": "உங்கள் தாவரத்தை ஸ்கேன் செய்யுங்கள் →",
        "Scan your plant.": "உங்கள் தாவரத்தை ஸ்கேன் செய்யுங்கள்.",
        "Analyze Leaf": "இலையை பகுப்பாய்வு செய்யுங்கள்",
        "📷 Take a Photo": "📷 புகைப்படம் எடுக்கவும்",
        "Upload from Gallery": "கேலரியிலிருந்து பதிவேற்றவும்",
        "Analysis Result": "பகுப்பாய்வு முடிவு",
        "Plant Care Assistant.": "தாவர பராமரிப்பு உதவியாளர்.",
        "Leaf Image Analysis": "இலை பட பகுப்பாய்வு",
        "Get Care Suggestions →": "பராமரிப்பு ஆலோசனைகளைப் பெறுங்கள் →",
        "← Back to Home": "← முகப்புக்குத் திரும்பவும்"
    }
};

function changeLanguage(lang) {
    localStorage.setItem("plantLanguage", lang);
    document.documentElement.lang = lang;

    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) {
        nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {
        if (node.parentElement.closest(
            "script, style, select, textarea, #condition, #suggestion"
        )) return;

        if (node.originalText === undefined) {
            node.originalText = node.nodeValue;
        }

        const original = node.originalText;
        const key = original.trim().replace(/\s+/g, " ");
        const translated = languages[lang]?.[key];

        node.nodeValue = translated
            ? original.replace(original.trim(), translated)
            : original;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const selector = document.createElement("select");

    selector.id = "languageSelector";
    selector.setAttribute("aria-label", "Select language");

    selector.innerHTML = `
        <option value="en">English</option>
        <option value="kn">ಕನ್ನಡ</option>
        <option value="hi">हिन्दी</option>
        <option value="te">తెలుగు</option>
        <option value="ta">தமிழ்</option>
    `;

    selector.style.cssText = `
        padding: 8px;
        border-radius: 10px;
        border: 1px solid #556b2f;
        background: white;
        color: #556b2f;
        font-size: 13px;
        cursor: pointer;
        max-width: 120px;
    `;

    document.querySelector(".app-header").appendChild(selector);

    const savedLanguage =
        localStorage.getItem("plantLanguage") || "en";

    selector.value = savedLanguage;

    selector.addEventListener("change", function () {
        changeLanguage(this.value);
    });

    changeLanguage(savedLanguage);
});

const extraTranslations = [
    [
        "Healthy plants,",
        "ಆರೋಗ್ಯಕರ ಸಸ್ಯಗಳು,",
        "स्वस्थ पौधे,",
        "ఆరోగ్యకరమైన మొక్కలు,",
        "ஆரோக்கியமான தாவரங்கள்,"
    ],
    [
        "happy life.",
        "ಸಂತೋಷದ ಜೀವನ.",
        "खुशहाल जीवन।",
        "సంతోషకరమైన జీవితం.",
        "மகிழ்ச்சியான வாழ்க்கை."
    ],
    [
        "YOUR PERSONAL PLANT ASSISTANT",
        "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಸಸ್ಯ ಸಹಾಯಕ",
        "आपका व्यक्तिगत पौधा सहायक",
        "మీ వ్యక్తిగత మొక్కల సహాయకుడు",
        "உங்கள் தனிப்பட்ட தாவர உதவியாளர்"
    ],
    [
        "Understand your plants, identify possible diseases and discover better ways to care for them with artificial intelligence.",
        "ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಸಹಾಯದಿಂದ ನಿಮ್ಮ ಸಸ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ, ರೋಗಗಳನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ಉತ್ತಮ ಆರೈಕೆ ವಿಧಾನಗಳನ್ನು ತಿಳಿಯಿರಿ.",
        "कृत्रिम बुद्धिमत्ता की मदद से अपने पौधों को समझें, संभावित रोगों की पहचान करें और बेहतर देखभाल के तरीके जानें।",
        "కృత్రిమ మేధస్సు సహాయంతో మీ మొక్కలను అర్థం చేసుకోండి, వ్యాధులను గుర్తించండి మరియు మెరుగైన సంరక్షణ పద్ధతులను తెలుసుకోండి.",
        "செயற்கை நுண்ணறிவு மூலம் உங்கள் தாவரங்களைப் புரிந்துகொண்டு, நோய்களைக் கண்டறிந்து, சிறந்த பராமரிப்பு முறைகளை அறியுங்கள்."
    ],
    [
        "Capture a leaf and identify possible diseases.",
        "ಎಲೆಯ ಚಿತ್ರ ತೆಗೆದು ಸಂಭವನೀಯ ರೋಗಗಳನ್ನು ಗುರುತಿಸಿ.",
        "पत्ती की तस्वीर लेकर संभावित रोगों की पहचान करें।",
        "ఆకు చిత్రాన్ని తీసి వ్యాధులను గుర్తించండి.",
        "இலையைப் படம் எடுத்து நோய்களைக் கண்டறியுங்கள்."
    ],
    [
        "Get helpful suggestions for your plant.",
        "ನಿಮ್ಮ ಸಸ್ಯಕ್ಕೆ ಉಪಯುಕ್ತ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
        "अपने पौधे के लिए उपयोगी सुझाव प्राप्त करें।",
        "మీ మొక్కకు ఉపయోగకరమైన సూచనలు పొందండి.",
        "உங்கள் தாவரத்திற்கான பயனுள்ள ஆலோசனைகளைப் பெறுங்கள்."
    ],
    [
        "Start scanning →",
        "ಸ್ಕ್ಯಾನ್ ಪ್ರಾರಂಭಿಸಿ →",
        "स्कैन शुरू करें →",
        "స్కాన్ ప్రారంభించండి →",
        "ஸ்கேன் தொடங்குங்கள் →"
    ],
    [
        "Start conversation →",
        "ಸಂಭಾಷಣೆ ಪ್ರಾರಂಭಿಸಿ →",
        "बातचीत शुरू करें →",
        "సంభాషణ ప్రారంభించండి →",
        "உரையாடலைத் தொடங்குங்கள் →"
    ]
];

extraTranslations.forEach(([en, kn, hi, te, ta]) => {
    languages.kn[en] = kn;
    languages.hi[en] = hi;
    languages.te[en] = te;
    languages.ta[en] = ta;
});


const pageTranslations = [
    [
        "AI PLANT DIAGNOSIS",
        "AI ಸಸ್ಯ ರೋಗ ಪತ್ತೆ",
        "AI पौधा रोग पहचान",
        "AI మొక్కల వ్యాధి నిర్ధారణ",
        "AI தாவர நோய் கண்டறிதல்"
    ],
    [
        "Capture or upload a tomato leaf to identify possible diseases.",
        "ರೋಗಗಳನ್ನು ಗುರುತಿಸಲು ಟೊಮೆಟೊ ಎಲೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "संभावित रोगों की पहचान के लिए टमाटर के पत्ते की तस्वीर अपलोड करें।",
        "వ్యాధులను గుర్తించడానికి టమాటా ఆకు చిత్రాన్ని అప్‌లోడ్ చేయండి.",
        "நோய்களைக் கண்டறிய தக்காளி இலையின் படத்தைப் பதிவேற்றவும்."
    ],
    [
        "Take a clear picture of your plant leaf.",
        "ನಿಮ್ಮ ಸಸ್ಯದ ಎಲೆಯ ಸ್ಪಷ್ಟ ಚಿತ್ರ ತೆಗೆಯಿರಿ.",
        "अपने पौधे की पत्ती की स्पष्ट तस्वीर लें।",
        "మీ మొక్క ఆకును స్పష్టంగా ఫోటో తీయండి.",
        "உங்கள் தாவர இலையைத் தெளிவாகப் படம் எடுக்கவும்."
    ],
    [
        "YOUR PLANT COMPANION",
        "ನಿಮ್ಮ ಸಸ್ಯದ ಸಂಗಾತಿ",
        "आपके पौधे का साथी",
        "మీ మొక్కల సహచరుడు",
        "உங்கள் தாவரத் துணை"
    ],
    [
        "Understand your plant and help it grow healthier.",
        "ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಆರೋಗ್ಯಕರವಾಗಿ ಬೆಳೆಯಲು ಸಹಾಯ ಮಾಡಿ.",
        "अपने पौधे को समझें और स्वस्थ बढ़ने में मदद करें।",
        "మీ మొక్కను అర్థం చేసుకొని ఆరోగ్యంగా పెరగడానికి సహాయపడండి.",
        "உங்கள் தாவரத்தைப் புரிந்துகொண்டு ஆரோக்கியமாக வளர உதவுங்கள்."
    ],
    [
        "Hello, plant lover!",
        "ನಮಸ್ಕಾರ, ಸಸ್ಯ ಪ್ರೇಮಿಯೇ!",
        "नमस्ते, पौधा प्रेमी!",
        "నమస్కారం, మొక్కల ప్రేమికులారా!",
        "வணக்கம், தாவர ஆர்வலரே!"
    ],
    [
        "Tell me what is happening to your plant. I will suggest possible problems and care tips.",
        "ನಿಮ್ಮ ಸಸ್ಯದ ಸಮಸ್ಯೆಯನ್ನು ತಿಳಿಸಿ. ನಾನು ಸಂಭವನೀಯ ಸಮಸ್ಯೆಗಳು ಮತ್ತು ಆರೈಕೆ ಸಲಹೆಗಳನ್ನು ನೀಡುತ್ತೇನೆ.",
        "अपने पौधे की समस्या बताएं। मैं संभावित समस्याएं और देखभाल के सुझाव दूंगा।",
        "మీ మొక్క సమస్యను వివరించండి. నేను సంరక్షణ సూచనలు అందిస్తాను.",
        "உங்கள் தாவரத்தின் பிரச்சினையைச் சொல்லுங்கள். பராமரிப்பு ஆலோசனைகளை வழங்குகிறேன்."
    ],
    [
        "Plant Health Analysis",
        "ಸಸ್ಯ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ",
        "पौधे के स्वास्थ्य का विश्लेषण",
        "మొక్క ఆరోగ్య విశ్లేషణ",
        "தாவர ஆரோக்கிய பகுப்பாய்வு"
    ],
    [
        "Describe your plant symptoms here...",
        "ನಿಮ್ಮ ಸಸ್ಯದ ಲಕ್ಷಣಗಳನ್ನು ಇಲ್ಲಿ ವಿವರಿಸಿ...",
        "अपने पौधे के लक्षण यहां बताएं...",
        "మీ మొక్క లక్షణాలను ఇక్కడ వివరించండి...",
        "உங்கள் தாவரத்தின் அறிகுறிகளை இங்கே விவரிக்கவும்..."
    ]
];

pageTranslations.forEach(([en, kn, hi, te, ta]) => {
    languages.kn[en] = kn;
    languages.hi[en] = hi;
    languages.te[en] = te;
    languages.ta[en] = ta;
});

const originalChangeLanguage = changeLanguage;

changeLanguage = function(lang) {
    originalChangeLanguage(lang);

    const textarea = document.getElementById("symptoms");

    if (textarea) {
        const key = "Describe your plant symptoms here...";
        textarea.placeholder = languages[lang][key] || key;
    }
};


const resultTranslations = [
    [
        "Possible watering or nutrient problem",
        "ನೀರು ಅಥವಾ ಪೋಷಕಾಂಶದ ಸಮಸ್ಯೆ ಇರಬಹುದು",
        "पानी या पोषक तत्वों की संभावित समस्या",
        "నీరు లేదా పోషకాల సమస్య ఉండవచ్చు",
        "நீர் அல்லது ஊட்டச்சத்து பிரச்சினை இருக்கலாம்"
    ],
    [
        "Check soil moisture and drainage. Avoid overwatering.",
        "ಮಣ್ಣಿನ ತೇವಾಂಶ ಮತ್ತು ನೀರಿನ ಒಳಚರಂಡಿಯನ್ನು ಪರಿಶೀಲಿಸಿ. ಹೆಚ್ಚು ನೀರು ಹಾಕಬೇಡಿ.",
        "मिट्टी की नमी और जल निकासी की जांच करें। अधिक पानी देने से बचें।",
        "నేల తేమ మరియు నీటి పారుదల పరిశీలించండి. ఎక్కువ నీరు పోయవద్దు.",
        "மண்ணின் ஈரப்பதம் மற்றும் வடிகாலை சரிபார்க்கவும். அதிக நீர் ஊற்ற வேண்டாம்."
    ],
    [
        "Possible leaf spot or fungal disease",
        "ಎಲೆ ಚುಕ್ಕೆ ಅಥವಾ ಶಿಲೀಂಧ್ರ ರೋಗ ಇರಬಹುದು",
        "पत्ती के धब्बे या फफूंद रोग की संभावना",
        "ఆకు మచ్చ లేదా శిలీంధ్ర వ్యాధి ఉండవచ్చు",
        "இலைப்புள்ளி அல்லது பூஞ்சை நோய் இருக்கலாம்"
    ],
    [
        "Inspect affected leaves and improve air circulation.",
        "ಬಾಧಿತ ಎಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರವನ್ನು ಸುಧಾರಿಸಿ.",
        "प्रभावित पत्तियों की जांच करें और वायु संचार सुधारें।",
        "ప్రభావిత ఆకులను పరిశీలించి గాలి ప్రసరణను మెరుగుపరచండి.",
        "பாதிக்கப்பட்ட இலைகளைப் பரிசோதித்து காற்றோட்டத்தை மேம்படுத்தவும்."
    ],
    [
        "Possible powdery mildew",
        "ಬೂದಿ ರೋಗ ಇರಬಹುದು",
        "चूर्णिल फफूंद रोग की संभावना",
        "బూడిద తెగులు ఉండవచ్చు",
        "சாம்பல் நோய் இருக்கலாம்"
    ],
    [
        "Improve ventilation and avoid wetting leaves.",
        "ಗಾಳಿಯ ಸಂಚಾರವನ್ನು ಸುಧಾರಿಸಿ ಮತ್ತು ಎಲೆಗಳನ್ನು ಒದ್ದೆ ಮಾಡಬೇಡಿ.",
        "वायु संचार सुधारें और पत्तियों को गीला करने से बचें।",
        "గాలి ప్రసరణను మెరుగుపరచండి. ఆకులను తడపవద్దు.",
        "காற்றோட்டத்தை மேம்படுத்தி இலைகளை நனைப்பதைத் தவிர்க்கவும்."
    ],
    [
        "Possible water stress",
        "ನೀರಿನ ಒತ್ತಡದ ಸಮಸ್ಯೆ ಇರಬಹುದು",
        "पानी की कमी या अधिकता की संभावना",
        "నీటి ఒత్తిడి సమస్య ఉండవచ్చు",
        "நீர் பற்றாக்குறை அல்லது மிகை இருக்கலாம்"
    ],
    [
        "Check soil moisture and adjust watering.",
        "ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನೀರಿನ ಪ್ರಮಾಣವನ್ನು ಸರಿಹೊಂದಿಸಿ.",
        "मिट्टी की नमी जांचें और पानी की मात्रा समायोजित करें।",
        "నేల తేమను పరిశీలించి నీటి పరిమాణాన్ని సరిచేయండి.",
        "மண்ணின் ஈரப்பதத்தைச் சரிபார்த்து நீர்ப்பாசனத்தைச் சரிசெய்யவும்."
    ],
    [
        "Possibly healthy plant",
        "ಸಸ್ಯವು ಆರೋಗ್ಯಕರವಾಗಿರಬಹುದು",
        "पौधा संभवतः स्वस्थ है",
        "మొక్క ఆరోగ్యంగా ఉండవచ్చు",
        "தாவரம் ஆரோக்கியமாக இருக்கலாம்"
    ],
    [
        "Maintain proper sunlight, watering and nutrition.",
        "ಸರಿಯಾದ ಸೂರ್ಯನ ಬೆಳಕು, ನೀರು ಮತ್ತು ಪೋಷಕಾಂಶಗಳನ್ನು ಒದಗಿಸಿ.",
        "उचित धूप, पानी और पोषण बनाए रखें।",
        "సరైన సూర్యరశ్మి, నీరు మరియు పోషకాలు అందించండి.",
        "சரியான சூரிய ஒளி, நீர் மற்றும் ஊட்டச்சத்தை வழங்கவும்."
    ],
    [
        "Unable to identify the problem",
        "ಸಮಸ್ಯೆಯನ್ನು ಗುರುತಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
        "समस्या की पहचान नहीं हो सकी",
        "సమస్యను గుర్తించలేకపోయాము",
        "பிரச்சினையை அடையாளம் காண முடியவில்லை"
    ],
    [
        "Please describe more plant symptoms.",
        "ದಯವಿಟ್ಟು ಸಸ್ಯದ ಹೆಚ್ಚಿನ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ.",
        "कृपया पौधे के अधिक लक्षण बताएं।",
        "దయచేసి మొక్క లక్షణాలను మరింత వివరించండి.",
        "தாவரத்தின் கூடுதல் அறிகுறிகளை விவரிக்கவும்."
    ]
];

resultTranslations.forEach(([en, kn, hi, te, ta]) => {
    languages.kn[en] = kn;
    languages.hi[en] = hi;
    languages.te[en] = te;
    languages.ta[en] = ta;
});

function translateText(text) {
    const lang = localStorage.getItem("plantLanguage") || "en";
    return languages[lang]?.[text] || text;
}

let lastResult = null;

if (typeof showResult === "function") {
    const originalShowResult = showResult;

    showResult = function(condition, suggestion) {
        lastResult = [condition, suggestion];

        originalShowResult(
            translateText(condition),
            translateText(suggestion)
        );
    };
}

const previousChangeLanguage = changeLanguage;

changeLanguage = function(lang) {
    previousChangeLanguage(lang);

    if (lastResult) {
        document.getElementById("condition").textContent =
            translateText(lastResult[0]);

        document.getElementById("suggestion").textContent =
            translateText(lastResult[1]);
    }
};


const scannerTranslations = [
    [
        "Tomato Bacterial Spot",
        "ಟೊಮೆಟೊ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಚುಕ್ಕೆ ರೋಗ",
        "टमाटर का जीवाणु धब्बा रोग",
        "టమాటా బ్యాక్టీరియా మచ్చ తెగులు",
        "தக்காளி பாக்டீரியா புள்ளி நோய்"
    ],
    [
        "Tomato Early Blight",
        "ಟೊಮೆಟೊ ಆರಂಭಿಕ ಅಂಗಮಾರಿ ರೋಗ",
        "टमाटर का अगेती झुलसा रोग",
        "టమాటా ముందస్తు ఆకుమాడు తెగులు",
        "தக்காளி ஆரம்ப கருகல் நோய்"
    ],
    [
        "Tomato Late Blight",
        "ಟೊಮೆಟೊ ತಡವಾದ ಅಂಗಮಾರಿ ರೋಗ",
        "टमाटर का पछेती झुलसा रोग",
        "టమాటా ఆలస్య ఆకుమాడు తెగులు",
        "தக்காளி பிந்தைய கருகல் நோய்"
    ],
    [
        "Apparently Healthy Tomato Leaf",
        "ಟೊಮೆಟೊ ಎಲೆ ಆರೋಗ್ಯಕರವಾಗಿ ಕಾಣುತ್ತಿದೆ",
        "टमाटर की पत्ती स्वस्थ दिखाई देती है",
        "టమాటా ఆకు ఆరోగ్యంగా కనిపిస్తోంది",
        "தக்காளி இலை ஆரோக்கியமாகத் தெரிகிறது"
    ],
    [
        "Avoid overhead watering, remove severely affected leaves and disinfect gardening tools.",
        "ಎಲೆಗಳ ಮೇಲೆ ನೀರು ಹಾಕಬೇಡಿ. ತೀವ್ರವಾಗಿ ಬಾಧಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ತೋಟದ ಉಪಕರಣಗಳನ್ನು ಸೋಂಕುರಹಿತಗೊಳಿಸಿ.",
        "ऊपर से पानी देने से बचें। गंभीर रूप से प्रभावित पत्तियां हटाएं और बागवानी उपकरणों को कीटाणुरहित करें।",
        "ఆకులపై నీరు పోయవద్దు. తీవ్రంగా ప్రభావితమైన ఆకులను తొలగించి తోట పనిముట్లను శుభ్రపరచండి.",
        "இலைகளின் மீது நீர் ஊற்றுவதைத் தவிர்க்கவும். கடுமையாக பாதிக்கப்பட்ட இலைகளை அகற்றி தோட்டக் கருவிகளை கிருமி நீக்கம் செய்யவும்."
    ],
    [
        "Remove affected leaves, improve air circulation and avoid splashing soil onto leaves.",
        "ಬಾಧಿತ ಎಲೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ, ಗಾಳಿಯ ಸಂಚಾರವನ್ನು ಸುಧಾರಿಸಿ ಮತ್ತು ಎಲೆಗಳ ಮೇಲೆ ಮಣ್ಣು ಸಿಡಿಯುವುದನ್ನು ತಪ್ಪಿಸಿ.",
        "प्रभावित पत्तियां हटाएं, वायु संचार सुधारें और पत्तियों पर मिट्टी के छींटे पड़ने से बचाएं।",
        "ప్రభావిత ఆకులను తొలగించి గాలి ప్రసరణను మెరుగుపరచండి. ఆకులపై మట్టి పడకుండా చూడండి.",
        "பாதிக்கப்பட்ட இலைகளை அகற்றி காற்றோட்டத்தை மேம்படுத்தவும். இலைகளில் மண் தெறிப்பதைத் தவிர்க்கவும்."
    ],
    [
        "Isolate the affected plant, avoid wetting leaves and consult a local agricultural expert promptly.",
        "ಬಾಧಿತ ಸಸ್ಯವನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ, ಎಲೆಗಳನ್ನು ಒದ್ದೆ ಮಾಡಬೇಡಿ ಮತ್ತು ತಕ್ಷಣ ಸ್ಥಳೀಯ ಕೃಷಿ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "प्रभावित पौधे को अलग रखें, पत्तियों को गीला न करें और तुरंत स्थानीय कृषि विशेषज्ञ से संपर्क करें।",
        "ప్రభావిత మొక్కను వేరుగా ఉంచండి. ఆకులను తడపకుండా వెంటనే స్థానిక వ్యవసాయ నిపుణుడిని సంప్రదించండి.",
        "பாதிக்கப்பட்ட தாவரத்தைத் தனிமைப்படுத்தி இலைகளை நனைப்பதைத் தவிர்க்கவும். உடனடியாக உள்ளூர் வேளாண் நிபுணரை அணுகவும்."
    ],
    [
        "Maintain proper watering, sunlight, drainage and regular monitoring.",
        "ಸರಿಯಾದ ನೀರು, ಸೂರ್ಯನ ಬೆಳಕು ಮತ್ತು ನೀರಿನ ಒಳಚರಂಡಿಯನ್ನು ಕಾಪಾಡಿ. ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ.",
        "उचित सिंचाई, धूप, जल निकासी और नियमित निगरानी बनाए रखें।",
        "సరైన నీరు, సూర్యరశ్మి, నీటి పారుదల మరియు క్రమమైన పర్యవేక్షణను కొనసాగించండి.",
        "சரியான நீர்ப்பாசனம், சூரிய ஒளி, வடிகால் மற்றும் வழக்கமான கண்காணிப்பைப் பராமரிக்கவும்."
    ],
    [
        "Model confidence",
        "ಮಾದರಿಯ ವಿಶ್ವಾಸ ಮಟ್ಟ",
        "मॉडल का विश्वास स्तर",
        "మోడల్ విశ్వాస స్థాయి",
        "மாதிரியின் நம்பிக்கை அளவு"
    ],
    [
        "Uncertain prediction",
        "ಅನಿಶ್ಚಿತ ಫಲಿತಾಂಶ",
        "अनिश्चित परिणाम",
        "అనిశ్చిత ఫలితం",
        "உறுதியற்ற முடிவு"
    ],
    [
        "Upload a clearer tomato leaf image.",
        "ಟೊಮೆಟೊ ಎಲೆಯ ಇನ್ನಷ್ಟು ಸ್ಪಷ್ಟವಾದ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "टमाटर की पत्ती की अधिक स्पष्ट तस्वीर अपलोड करें।",
        "మరింత స్పష్టమైన టమాటా ఆకు చిత్రాన్ని అప్‌లోడ్ చేయండి.",
        "மேலும் தெளிவான தக்காளி இலைப் படத்தைப் பதிவேற்றவும்."
    ],
    [
        "Analyzing your plant...",
        "ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
        "आपके पौधे का विश्लेषण हो रहा है...",
        "మీ మొక్కను విశ్లేషిస్తున్నాము...",
        "உங்கள் தாவரம் பகுப்பாய்வு செய்யப்படுகிறது..."
    ],
    [
        "Analyzing your leaf...",
        "ನಿಮ್ಮ ಎಲೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
        "आपकी पत्ती का विश्लेषण हो रहा है...",
        "మీ ఆకును విశ్లేషిస్తున్నాము...",
        "உங்கள் இலை பகுப்பாய்வு செய்யப்படுகிறது..."
    ],
    [
        "Please wait while the AI checks your plant.",
        "AI ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ಪರಿಶೀಲಿಸುವವರೆಗೆ ಕಾಯಿರಿ.",
        "AI द्वारा पौधे की जांच होने तक प्रतीक्षा करें।",
        "AI మీ మొక్కను పరిశీలించే వరకు వేచి ఉండండి.",
        "AI உங்கள் தாவரத்தைச் சரிபார்க்கும் வரை காத்திருக்கவும்."
    ],
    [
        "Analysis failed",
        "ವಿಶ್ಲೇಷಣೆ ವಿಫಲವಾಗಿದೆ",
        "विश्लेषण विफल रहा",
        "విశ్లేషణ విఫలమైంది",
        "பகுப்பாய்வு தோல்வியடைந்தது"
    ],
    [
        "Image analysis failed",
        "ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ ವಿಫಲವಾಗಿದೆ",
        "चित्र का विश्लेषण विफल रहा",
        "చిత్ర విశ్లేషణ విఫలమైంది",
        "படப் பகுப்பாய்வு தோல்வியடைந்தது"
    ],
    [
        "Please upload a valid leaf image.",
        "ದಯವಿಟ್ಟು ಮಾನ್ಯವಾದ ಎಲೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "कृपया पत्ती की वैध तस्वीर अपलोड करें।",
        "దయచేసి సరైన ఆకు చిత్రాన్ని అప్‌లోడ్ చేయండి.",
        "சரியான இலைப் படத்தைப் பதிவேற்றவும்."
    ],
    [
        "Please check your connection and try again.",
        "ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        "अपना कनेक्शन जांचें और पुनः प्रयास करें।",
        "మీ కనెక్షన్‌ను పరిశీలించి మళ్లీ ప్రయత్నించండి.",
        "இணைப்பைச் சரிபார்த்து மீண்டும் முயற்சிக்கவும்."
    ],
    [
        "Please take a photo or upload a leaf image.",
        "ದಯವಿಟ್ಟು ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಎಲೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "कृपया फोटो लें या पत्ती की तस्वीर अपलोड करें।",
        "దయచేసి ఫోటో తీయండి లేదా ఆకు చిత్రాన్ని అప్‌లోడ్ చేయండి.",
        "புகைப்படம் எடுக்கவும் அல்லது இலைப் படத்தைப் பதிவேற்றவும்."
    ],
    [
        "No image uploaded",
        "ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿಲ್ಲ",
        "कोई तस्वीर अपलोड नहीं की गई",
        "చిత్రం అప్‌లోడ్ చేయలేదు",
        "படம் பதிவேற்றப்படவில்லை"
    ],
    [
        "Please upload a tomato leaf image.",
        "ದಯವಿಟ್ಟು ಟೊಮೆಟೊ ಎಲೆಯ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
        "कृपया टमाटर की पत्ती की तस्वीर अपलोड करें।",
        "దయచేసి టమాటా ఆకు చిత్రాన్ని అప్‌లోడ్ చేయండి.",
        "தக்காளி இலைப் படத்தைப் பதிவேற்றவும்."
    ],
    [
        "Consult a plant care expert.",
        "ಸಸ್ಯ ಆರೈಕೆ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        "पौधों की देखभाल के विशेषज्ञ से संपर्क करें।",
        "మొక్కల సంరక్షణ నిపుణుడిని సంప్రదించండి.",
        "தாவர பராமரிப்பு நிபுணரை அணுகவும்."
    ]
];

scannerTranslations.forEach(([en, kn, hi, te, ta]) => {
    languages.kn[en] = kn;
    languages.hi[en] = hi;
    languages.te[en] = te;
    languages.ta[en] = ta;
});

translateText = function(text) {
    const lang = localStorage.getItem("plantLanguage") || "en";
    const dictionary = languages[lang] || {};

    if (typeof text !== "string") return text;

    if (text.includes(" | Model confidence: ")) {
        const [condition, confidence] =
            text.split(" | Model confidence: ");

        return (dictionary[condition] || condition)
            + " | "
            + (dictionary["Model confidence"] || "Model confidence")
            + ": " + confidence;
    }

    return dictionary[text] || text;
};


const finalTranslations = [
    [
        "Checking symptoms...",
        "ಲಕ್ಷಣಗಳನ್ನು ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
        "लक्षणों की जांच हो रही है...",
        "లక్షణాలను పరిశీలిస్తున్నాము...",
        "அறிகுறிகள் சரிபார்க்கப்படுகின்றன..."
    ],
    [
        "Understanding your plant...",
        "ನಿಮ್ಮ ಸಸ್ಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ...",
        "आपके पौधे को समझ रहे हैं...",
        "మీ మొక్కను అర్థం చేసుకుంటున్నాము...",
        "உங்கள் தாவரத்தைப் புரிந்துகொள்கிறோம்..."
    ],
    [
        "Please wait for care suggestions.",
        "ಆರೈಕೆ ಸಲಹೆಗಳಿಗಾಗಿ ಕಾಯಿರಿ.",
        "देखभाल के सुझावों की प्रतीक्षा करें।",
        "సంరక్షణ సూచనల కోసం వేచి ఉండండి.",
        "பராமரிப்பு ஆலோசனைகளுக்காக காத்திருக்கவும்."
    ],
    [
        "Please describe your plant symptoms.",
        "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಸ್ಯದ ಲಕ್ಷಣಗಳನ್ನು ವಿವರಿಸಿ.",
        "कृपया अपने पौधे के लक्षण बताएं।",
        "దయచేసి మీ మొక్క లక్షణాలను వివరించండి.",
        "உங்கள் தாவரத்தின் அறிகுறிகளை விவரிக்கவும்."
    ],
    [
        "Connection error",
        "ಸಂಪರ್ಕ ದೋಷ",
        "कनेक्शन त्रुटि",
        "కనెక్షన్ లోపం",
        "இணைப்பு பிழை"
    ],
    [
        "Please check whether the server is running.",
        "ಸರ್ವರ್ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.",
        "कृपया जांचें कि सर्वर चल रहा है।",
        "సర్వర్ పనిచేస్తుందో లేదో పరిశీలించండి.",
        "சேவையகம் இயங்குகிறதா என சரிபார்க்கவும்."
    ],
    [
        "Please select a valid image.",
        "ದಯವಿಟ್ಟು ಸರಿಯಾದ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        "कृपया सही तस्वीर चुनें।",
        "దయచేసి సరైన చిత్రాన్ని ఎంచుకోండి.",
        "சரியான படத்தைத் தேர்ந்தெடுக்கவும்."
    ],
    [
        "Please select an image smaller than 9 MB.",
        "ದಯವಿಟ್ಟು 9 MB ಗಿಂತ ಕಡಿಮೆ ಗಾತ್ರದ ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
        "कृपया 9 MB से छोटी तस्वीर चुनें।",
        "దయచేసి 9 MB కంటే చిన్న చిత్రాన్ని ఎంచుకోండి.",
        "9 MB க்கும் குறைவான படத்தைத் தேர்ந்தெடுக்கவும்."
    ],
    [
        "No symptoms entered",
        "ಯಾವುದೇ ಲಕ್ಷಣಗಳನ್ನು ನಮೂದಿಸಿಲ್ಲ",
        "कोई लक्षण दर्ज नहीं किया गया",
        "లక్షణాలు నమోదు చేయలేదు",
        "அறிகுறிகள் உள்ளிடப்படவில்லை"
    ]
];

finalTranslations.forEach(([en, kn, hi, te, ta]) => {
    languages.kn[en] = kn;
    languages.hi[en] = hi;
    languages.te[en] = te;
    languages.ta[en] = ta;
});

