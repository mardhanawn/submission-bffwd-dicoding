import './meal-item.js';

class MealList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
 
    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            font-weight: 400;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        this.shadowDOM.innerHTML += `<h2>${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._meals.forEach(meal => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal;
            this.shadowDOM.appendChild(mealItemElement);
        })
    }
}

customElements.define("meal-list", MealList);