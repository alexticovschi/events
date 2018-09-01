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
}
