class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
 
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            width: 80%;
            display: block;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 50px;
            border : 1px solid #dc3545;
            // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .fan-art-meal {
            width: 80%;
            display: block;
            margin: auto;
            margin-top: 30px;
            max-height: 300px;
            border-radius: 10px;
            object-fit: cover;
            object-position: center;
        }
        
        .meal-info {
            padding: 24px;
            font-family: "Open Sans", sans-serif;
        }
        
        .meal-info > h2 {
            font-size: 20px;
            font-weight: 700;
            text-align: center;
        }
        
        .meal-info > #category {
            font-size: 16px;
            font-weight: 600;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        
        .meal-info > #instruction {
            font-size: 16px;
            font-weight: 400;
            text-align: justify;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }</style>
        <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Thumb Meal">
        <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
            <p id="category">${this._meal.strCategory} from ${this._meal.strArea}</p>
            <p id="instruction">${this._meal.strInstructions}</p>
        </div>`;
    }
}

customElements.define("meal-item", MealItem);