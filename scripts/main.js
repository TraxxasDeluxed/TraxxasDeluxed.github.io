class NavBar extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.
    connectedCallback() {
        this.id = "navbar";
        this.innerHTML = `
        <ul>
            <li><a href="/index.html">Ayansh Singh</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/animations.html">Work</a></li>
            <li><a href="/contactUs.html">Contact</a></li>
        </ul>`;
    }
}

// Register the CurrentDate component using the tag name <current-date>.
customElements.define('nav-bar', NavBar);


