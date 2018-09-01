class UI {
    constructor() {
        // App initialization
        this.init();
    }
    // Methods to be executed when the app is initialized
    init() {

        // Display categories in <select>
        this.displayCategories();

        // Select the results
        this.result = document.getElementById('result');

    }

    // Display events in the UI
    displayEvents(events) {
        console.log(events)
        // Build the template
        let HTMLTemplate = '';

        events.forEach(eventInfo => {
            HTMLTemplate += `
                <div class="col-md-4 mt-4 shadow p-3 mb-5 rounded">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}" />
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h4 class="text-center card-title">${eventInfo.name.text}</h4>
                                <p class="lead text-info">Event Information: </p>
                                <p>${eventInfo.description.text && eventInfo.description.text.substr(0,200)}...</p>
                                <span class="badge badge-light">Date & Time: ${eventInfo.start.local}</span>
                                
                                <a href="${eventInfo.url}" target="_blank" class="btn cardBtn btn-warning btn-block mt-4">View Event</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }); 

        this.result.innerHTML = HTMLTemplate;
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
