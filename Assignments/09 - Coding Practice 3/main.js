// p element IDs, where expected output should go
var today = document.getElementById("today");
var custom = document.getElementById("custom");
var betwixt = document.getElementById("betwixt");

// Input IDs
var inputDateTo2030 = document.getElementById("2030ID");
var daysBetween1 = document.getElementById("date1");
var daysBetween2 = document.getElementById("date2");

// Button IDs
var fromTodayBtn = document.getElementById("today2030Btn");
var fromCustomBtn = document.getElementById("custom2030Btn");
var fromBetwixtBtn = document.getElementById("betwixtBtn");

// const variables for todays date and the first day of 2030
const date2030 = new Date("01/01/2030");
const todaysDate = new Date();


fromTodayBtn.addEventListener('click', e => {
    e.preventDefault()

    todayTo2030()
});

fromCustomBtn.addEventListener('click', e => {
    e.preventDefault()

    dateTo2030()
});

fromBetwixtBtn.addEventListener('click', e => {
    e.preventDefault()

    twoDates()
});

function todayTo2030() {

    let differenceInTime = date2030.getTime() - todaysDate.getTime();
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    today.innerHTML = `<p>Today, there are <strong>${differenceInDays}</strong> days until the year 2030.</p>`
}

function dateTo2030() {

    let customDate = new Date(inputDateTo2030.value)

    let differenceInTime = date2030.getTime() - customDate.getTime()
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

    custom.innerHTML = `<p>There are <strong>${differenceInDays}</strong> days until the year 2030 from this date.</p>`
}


function twoDates() {

    let date1 = new Date(daysBetween1.value);
    let date2 = new Date(daysBetween2.value);

    let differenceInTime = date2.getTime() - date1.getTime();

    let differenceInDays = Math.abs(differenceInTime / (1000 * 3600 * 24));

    betwixt.innerHTML = `<p>There are <strong>${differenceInDays}</strong> days between these dates.</p>`
}