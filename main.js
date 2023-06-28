let submit = document.querySelector(".svg");
submit.addEventListener('click', hundleClick)

function hundleClick() {
    let dayValue = document.querySelector("#day").value;
    let monthValue = parseInt(document.querySelector("#month").value);
    let yearValue = parseInt(document.querySelector("#year").value);
    let alertDay = document.querySelector(".alert-message-day");
    let alertMonth = document.querySelector(".alert-message-month");
    let alertYear = document.querySelector(".alert-message-year");
    let spanYear = document.querySelector(".span-year");
    let spanMonth = document.querySelector(".span-month");
    let spanDay = document.querySelector(".span-day");

    if (dayValue === '') {
        console.log("empty date")
    }
    else {
        const now = new Date()
        const birthday = new Date(yearValue, monthValue - 1, dayValue)
        let ageinmili = now.getTime() - birthday.getTime()
        let ageInYears = Math.floor(ageinmili / (1000 * 60 * 60 * 24 * 365));
        let ageInMonths = Math.floor(ageinmili / (1000 * 60 * 60 * 24 * 30));
        const ageInDays = Math.floor(ageinmili / (1000 * 60 * 60 * 24));
        console.log(ageInYears)
        console.log(ageInMonths % 12)
        console.log(ageinmili % 30)
        if (true) {
            spanDay.textContent = ageInDays % 30
            spanMonth.textContent = ageInMonths % 12
            spanYear.textContent = ageInYears

        } else {
            alertDay.textContent = "day must be valid day"
            alertMonth.textContent = "month must be valid month"
            alertYear.textContent = "year must be in the past"
        }
    }


}

// return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
function isLeapYear(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}