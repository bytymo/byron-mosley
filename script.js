let date = new Date()
let timeOfDay = date.getHours()
let year = date.getFullYear()
let message

    if (timeOfDay < 12) {
        message = "Good morning!"
    } else if (timeOfDay >= 12 && timeOfDay < 18) {
        message = "Good afternoon!"
    } else {
        message = "Good evening!"
    }

let htmlMsg = document.getElementById('welcome-msg')

    htmlMsg.innerHTML = message

let getYear = document.getElementById('footer-year')
    getYear.innerHTML = year