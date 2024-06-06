const texts = {
    "c1": ["Hello", "Hello", "Hello", "Hello", "Hello", "Hello"],
    "c2": ["Bello", "Bello", "Bello", "Bello", "Bello", "Bello"],
    "c3": ["Cello", "Cello", "Cello", "Cello", "Cello", "Cello"],
    "c4": ["Dello", "Dello", "Dello", "Dello", "Dello", "Dello"]
 };
 
 function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];
 
    if (i < text.length - 1) {
        setTimeout(() => textTypingEffect(element, text, i + 1), 50);
    }
 }
 
 function applyTextTypingEffect(elements, texts) {
    elements.forEach((element, index) => {
        if (element) {
            textTypingEffect(element, texts[index]);
        }
    });
 }
 
 document.querySelectorAll('input[name="slide"]').forEach(radio => {
    radio.addEventListener('change', (event) => {
        const selectedId = event.target.id;
        const textSet = texts[selectedId];
 
        const elements = [
            document.querySelector("#info-c1 .headerh1"),
            document.querySelector("#info-c2 .headerh1"),
            document.querySelector("#info-c3 .headerh1"),
            document.querySelector("#info-c4 .headerh1"),
            document.querySelector("#info-left .headerh1"),
            document.querySelector("#info-right .headerh1")
        ];
 
        applyTextTypingEffect(elements, textSet);
    });
 });
 
 // Initial trigger for the default checked radio button
 const initialSelectedRadio = document.querySelector('input[name="slide"]:checked');
 if (initialSelectedRadio) {
    const initialSelectedId = initialSelectedRadio.id;
    const initialTextSet = texts[initialSelectedId];
 
    const elements = [
        document.querySelector("#info-c1 .headerh1"),
        document.querySelector("#info-c2 .headerh1"),
        document.querySelector("#info-c3 .headerh1"),
        document.querySelector("#info-c4 .headerh1"),
        document.querySelector("#info-left .headerh1"),
        document.querySelector("#info-right .headerh1")
    ];
 
    applyTextTypingEffect(elements, initialTextSet);
 }
 