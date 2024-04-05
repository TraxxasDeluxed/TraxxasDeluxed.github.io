class CurrentDate extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.
    connectedCallback() {
        // Create a Date object representing the current date.
        const now = new Date();
        
        // Format the date to a human-friendly string, and set the
        // formatted date as the text content of this element.
        this.textContent = now.toLocaleDateString();
    }
}

// Register the CurrentDate component using the tag name <current-date>.
customElements.define('current-date', CurrentDate);
class NavBar extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.
    connectedCallback() {
        this.innerHTML = `<div id='navbar'>
        <ul>
            <li><a href="#">Logo</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/animations.html">Work</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>`;
    }
}

// Register the CurrentDate component using the tag name <current-date>.
customElements.define('nav-bar', NavBar);


