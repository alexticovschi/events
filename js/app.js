// Instantiate both classes
const eventBrite = new EventBrite();
const ui = new UI();

// Event listener for the submit button
document.getElementById('submitBtn').addEventListener('click', (e) => {

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // console.log(eventName, category)

    if(eventName !== '') {
        // Query Eventbrite API
        
    } else {
        // Display message to user 
        ui.displayMessage('Please add an Event or City', 'alert alert-danger mt-4 text-center')
    }

})