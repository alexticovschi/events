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
            .then(data => console.log(data.categories));
    }
}
