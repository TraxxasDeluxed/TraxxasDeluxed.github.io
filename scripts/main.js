// Define a new custom element 'NavBar' by extending the HTMLElement class
class NavBar extends HTMLElement {
    // Method called when the element is added to the DOM
    connectedCallback() {
        // Set the id attribute of this element to 'navbar'
        this.id = "navbar";

        // Set the inner HTML of this element to contain a navigation bar
        this.innerHTML = `
        <ul>
            <li><a href="/index.html">Ayansh Singh</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/animations.html">Work</a></li>
            <li><a href="/contactUs.html">Contact</a></li>
        </ul>`;
    }
}

// Register the custom element with the tag name <nav-bar>
customElements.define('nav-bar', NavBar);
