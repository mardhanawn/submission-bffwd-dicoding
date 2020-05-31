class SearchBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchElement").value;
    }

    render(){
        this.innerHTML = `
        <div id="search-container" class="search-container">
            <input placeholder="Enter the food you are looking for here!" id="searchElement" type="search">
            <button class="btn btn-danger btn-sm" id="searchButtonElement" type="submit button">Search</button>
        </div>
        `;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);