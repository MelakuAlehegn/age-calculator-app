let submit = document.querySelector(".svg");
submit.addEventListener('click', hundleClick)

function hundleClick() {
    let day = document.querySelector("#day");
    let month = document.querySelector("#month");
    let year = document.querySelector("#year");

    let dayValue = document.querySelector("#day").value;
    let monthValue = document.querySelector("#month").value;
    let yearValue = document.querySelector("#year").value;
    let form = document.querySelector("#form");
    let alertDay = document.querySelector(".alert-message-day");
    let alertMonth = document.querySelector(".alert-message-month");
    let alertYear = document.querySelector(".alert-message-year");

    let spanYear = document.querySelector(".span-year");
    let spanMonth = document.querySelector(".span-month");
    let spanDay = document.querySelector(".span-day");
    if (dayValue === '' && monthValue === '' && yearValue === '') {
        alertDay.innerHTML = "day must be valid day"
        alertMonth.innerHTML = "month must be valid month"
        alertYear.innerHTML = "year must be in the past"
        console.log('day invalid')
    }
    else if (dayValue === '') {
        alertDay.innerHTML = "day must be valid day"

    }
    else if (dayValue === '' && monthValue === '') {
        alertDay.innerHTML = "day must be valid day"
        alertMonth.innerHTML = "month must be valid month"
    }
    else if (monthValue === '' && yearValue === '') {
        alertMonth.innerHTML = "month must be valid month"
        alertYear.innerHTML = "year must be in the past"
    }
    else if (monthValue === '') {
        alertMonth.innerHTML = "month must be valid month"

        console.log('month invalid')
    }
    else if (yearValue === '') {
        alertYear.innerHTML = "year must be in the past"
        console.log('year invalid')

    }
    else {
        spanDay.innerHTML = calDays(dayValue)
        spanMonth.innerHTML = calcMonths(monthValue)
        spanYear.innerHTML = calcYear(yearValue)
    }
    console.log(dayValue)
}
function calcMonths(month) {

}