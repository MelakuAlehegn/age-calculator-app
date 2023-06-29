let submit = document.querySelector(".svg");
submit.addEventListener('click', hundleClick)

function hundleClick() {
    let dayValue = parseInt(document.querySelector("#day").value);
    let monthValue = parseInt(document.querySelector("#month").value);
    let yearValue = parseInt(document.querySelector("#year").value);
    let alertDay = document.querySelector(".alert-message-day");
    let alertMonth = document.querySelector(".alert-message-month");
    let alertYear = document.querySelector(".alert-message-year");
    let spanYear = document.querySelector(".span-year");
    let spanMonth = document.querySelector(".span-month");
    let spanDay = document.querySelector(".span-day");
    let now = new Date()
    let birthday = new Date(yearValue, monthValue - 1, dayValue)
    if (isNaN(dayValue)) {
        alertDay.textContent = "day must be valid day"
        setTimeout(() => {
            alertDay.textContent = "";
        }, 4000);
    }
    else if (isNaN(monthValue)) {
        alertMonth.textContent = "month must be valid month"
        setTimeout(() => {
            alertDay.textContent = "";
        }, 4000);
    }
    else if (yearValue > now.getFullYear()) {
        alertYear.textContent = "year must be in the past"
        setTimeout(() => {
            alertDay.textContent = "";
        }, 4000);
    }
    else if (isNaN(yearValue)) {
        alertYear.textContent = "year must be valid"
        setTimeout(() => {
            alertDay.textContent = "";
        }, 4000);
    }
    else {
        let ageinmili = now.getTime() - birthday.getTime()
        let ageInYears = Math.floor(ageinmili / (1000 * 60 * 60 * 24 * 365));
        let ageInMonths = Math.floor(ageinmili / (1000 * 60 * 60 * 24 * 30));
        const ageInDays = Math.floor(ageinmili / (1000 * 60 * 60 * 24));
        console.log(ageInYears)
        console.log(ageInMonths % 12)
        console.log(ageinmili % 30)
        spanDay.textContent = ageInDays % 30
        spanMonth.textContent = ageInMonths % 12
        spanYear.textContent = ageInYears
    }

}