class EventBrite {
    constructor() {
        this.token_auth = 'INA36KYEG6RHF3CFIB53';
        this.orderBy = 'date';
    } 

    // Get the events from the Eventbrite API
    async queryAPI(eventName, category) {
        // Make a GET request and wait for the request to finish
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${category}&token=${this.token_auth}`);

        // Wait for the response and return as JSON
        const events = await eventsResponse.json();

        // Return the object
        return { events };
    }

    // Get categories from the API
    async getCategoriesAPI() {
        // Make a GET request and wait for the request to finish
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);
    
        // get the JSON version of the response
        const categories = await categoriesResponse.json();

        // return the object
        return { categories }
    }
}