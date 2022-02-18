var CC9 = document.getElementsByClassName("CC9");
var CC10 = document.getElementsByClassName("CC10");

var inputDateTo2030 = document.getElementById("2030ID");
var fromTodayBtn = document.getElementById("2030Btn");

var daysBetween1 = document.getElementById("date1");
var daysBetween2 = document.getElementById("date2");

const date2030 = new Date("01/01/2030");
const today = new Date();


fromTodayBtn.addEventListener('click', e => {
    e.preventDefault()

    todayTo2030()
    dateTo2030()
    twoDates()
});

function todayTo2030() {

    let differenceInTime = date2030.getTime() - today.getTime();
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    console.log(`Today, there are ${differenceInDays} days until the year 2030`)
}

function dateTo2030() {

    let diff = new Date(inputDateTo2030.value)

    let differenceInTime = date2030.getTime() - diff.getTime()
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

    console.log(`There are ${differenceInDays} days until the year 2030 from this date`)
}

function twoDates() {

    // JavaScript program to illustrate
    // calculation of no. of days between two date

    // To set two dates to two variables
    let date1 = new Date(daysBetween1.value);
    let date2 = new Date(daysBetween2.value);

    // To calculate the time difference of two dates
    var differenceInTime = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var differenceInDays = Math.abs(differenceInTime / (1000 * 3600 * 24));

    console.log(`There are ${differenceInDays} days between these dates`)
}