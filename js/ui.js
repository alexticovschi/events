class UI {
    constructor() {
        // App initialization
        this.init();
    }
    // Methods to be executed when the app is initialized
    init() {

        // Display categories in <select>
        this.displayCategories();

    }

    // Display the categories
    displayCategories() {
        const categoriesList = eventBrite.getCategoriesAPI()
            .then(data => {
                const categoriesList = data.categories.categories;
                const categoriesSelect = document.querySelector('#category');

                // Insert categories into <select> fields
                categoriesList.forEach(category => {
                    // Create options
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name));
                    categoriesSelect.appendChild(option);
                })
            })
            .catch(error => console.log(error));
    }

    // Display message
    displayMessage(message, classes) {
        // Create a div
        const div = document.createElement('div');
        div.className = classes;
        
        // Add the text
        div.appendChild(document.createTextNode(message));

        // Insert into HTML
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);

        // Remove alert after 3 seconds
        setTimeout(() => {
            this.removeMessage(div, 1500);
        }, 3000)
    }

    // Remove message
    removeMessage( el, speed ) {
        const seconds = speed/1000;
        el.style.transition = "opacity "+seconds+"s ease";
    
        el.style.opacity = 0;
        setTimeout(function() {
            el.parentNode.removeChild(el);
        }, speed);
    }
    
}
