class EventBrite {
    constructor() {
        this.token_auth = 'INA36KYEG6RHF3CFIB53'
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