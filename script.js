// Create a variable to gather the current date info
let date = new Date()

// Create variables to identify the hour of the day and the full year, respectively
let timeOfDay = date.getHours()
let year = date.getFullYear()

// Create a variable to hold the greeting message based on the time of day, locally
let message

    // If the time of day is before 12:00, say "good morning"; if it is after noon but before 18:00 (aka 6:00pm), say "good afternoon", otherwise say "good evening"
    if (timeOfDay < 12) {
        message = "Good morning!"
    } else if (timeOfDay >= 12 && timeOfDay < 18) { 
        message = "Good afternoon!"
    } else {
        message = "Good evening!"
    }

// Create a new variable linking the javascript to the "welcome-msg" ID in the HTML document
let htmlMsg = document.getElementById('welcome-msg')
    // and input the updated greeting message
    htmlMsg.innerHTML = message

// Create a new variable linking the javascript to the "footer-year" ID in the HTML document
let getYear = document.getElementById('footer-year')
    // and input the updated year
    getYear.innerHTML = year