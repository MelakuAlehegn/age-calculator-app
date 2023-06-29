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
        const daylabel = document.querySelector(".label-day");
        let dayInput = document.querySelector("#day");
        dayInput.style.border = "1px solid hsl(0, 100%, 67%)"
        alertDay.textContent = "day must be valid day"
        daylabel.style.color = "hsl(0, 100%, 67%)"
        setTimeout(() => {
            alertDay.textContent = "";
            daylabel.style.color = "hsl(0, 1%, 44%)"
            dayInput.style.border = "1px solid hsl(0, 0%, 86%)"

        }, 4000);
    }
    else if (isNaN(monthValue)) {
        const monthlabel = document.querySelector(".label-month");
        monthlabel.style.color = "hsl(0, 100%, 67%)"
        alertMonth.textContent = "month must be valid month"

        setTimeout(() => {
            alertMonth.textContent = "";
            monthlabel.style.color = "hsl(0, 1%, 44%)"
        }, 4000);
    }
    else if (yearValue > now.getFullYear()) {
        let yearlabel = document.querySelector(".label-year");
        yearlabel.style.color = "hsl(0, 100%, 67%)"
        alertYear.textContent = "year must be in the past"
        setTimeout(() => {
            alertYear.textContent = "";
            yearlabel.style.color = "hsl(0, 1%, 44%)"
        }, 4000);
    }
    else if (isNaN(yearValue)) {
        alertYear.textContent = "year must be valid"
        let yearlabel = document.querySelector(".label-year");
        yearlabel.style.color = "hsl(0, 100%, 67%)"
        setTimeout(() => {
            alertYear.textContent = "";
            yearlabel.style.color = "hsl(0, 1%, 44%)"
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