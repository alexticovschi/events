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
        eventBrite.queryAPI(eventName, category)
            .then(data => {
                const events = data.events.events;
                // console.log(events);

                // Check for events
                if(events.length > 0) {
                    // Display events
                    ui.displayEvents(events);
                } else {
                    // No events - Display message
                    ui.displayMessage('No Events Found!', 'alert alert-info mt-4 text-center')
                }
 
            });
    } else {
        // Display message to user 
        ui.displayMessage('Please add an Event or City', 'alert alert-danger mt-4 text-center')
    }

})