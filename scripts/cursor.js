// Select the element with the class 'cursor'
const cursor = document.querySelector('.cursor');

// Update cursor position based on mouse movement
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});

// Add an expanding effect to the cursor on click
document.addEventListener('click', () => {
    cursor.classList.add("expand");

    // Remove the expanding effect after 500ms
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
