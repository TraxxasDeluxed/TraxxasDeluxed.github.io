// Object containing different sets of text for the info boxes 
const texts = {
    "c1": ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello"],
    "c2": ["Bello", "Bello", "Bello", "Bello", "Bello", "Bello"],
    "c3": ["Cello", "Cello", "Cello", "Cello", "Cello", "Cello"],
    "c4": ["Dello", "Dello", "Dello", "Dello", "Dello", "Dello"]
};

// Function to create a typing effect for text
function textTypingEffect(element, text, i = 0) {
    // Clear the element's text content when starting
    if (i === 0) {
        element.textContent = "";
    }
    // Add the next character to the element's text content
    element.textContent += text[i];

    // Continue the typing effect until the end of the text
    if (i < text.length - 1) {
        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }
}

// Function to apply the typing effect to multiple elements
function applyTextTypingEffect(elements, texts) {
    elements.forEach((element, index) => {
        if (element) {
            textTypingEffect(element, texts[index]);
        }
    });
}

// Add change event listeners to all radio buttons with the name 'slide'
document.querySelectorAll('input[name="slide"]').forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedId = event.target.id; // Get the ID of the selected radio button
        const textSet = texts[selectedId]; // Get the corresponding text set

        // Select elements to apply the typing effect to
        const elements = [
            document.querySelector("#info-c1 .headerh1"),
            document.querySelector("#info-c2 .headerh1"),
            document.querySelector("#info-c3 .headerh1"),
            document.querySelector("#info-c4 .headerh1"),
            document.querySelector("#info-left .headerh1"),
            document.querySelector("#info-right .headerh1")
        ];

        // Apply the typing effect to the selected elements
        applyTextTypingEffect(elements, textSet);
    });
});

// Trigger the typing effect for the initially checked radio button on page load
const initialSelectedRadio = document.querySelector('input[name="slide"]:checked');
if (initialSelectedRadio) {
    const initialSelectedId = initialSelectedRadio.id; // Get the ID of the initially selected radio button
    const initialTextSet = texts[initialSelectedId]; // Get the corresponding text set

    // Select elements to apply the typing effect to
    const elements = [
        document.querySelector("#info-c1 .headerh1"),
        document.querySelector("#info-c2 .headerh1"),
        document.querySelector("#info-c3 .headerh1"),
        document.querySelector("#info-c4 .headerh1"),
        document.querySelector("#info-left .headerh1"),
        document.querySelector("#info-right .headerh1")
    ];

    // Apply the typing effect to the selected elements
    applyTextTypingEffect(elements, initialTextSet);
}
