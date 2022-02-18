// p element IDs, where expected output should go
var today = document.getElementById("today");
var custom = document.getElementById("custom");
var betwixt = document.getElementById("betwixt");

// Input IDs
var inputDateTo2030 = document.getElementById("ID2030");
var daysBetween1 = document.getElementById("date1");
var daysBetween2 = document.getElementById("date2");

// Button IDs
var fromTodayBtn = document.getElementById("today2030Btn");
var fromCustomBtn = document.getElementById("custom2030Btn");
var fromBetwixtBtn = document.getElementById("betwixtBtn");

// const variables for todays date and the first day of 2030
const date2030 = new Date("01/01/2030");
const todaysDate = new Date();

// Live timer
var liveUpdate = document.getElementById("liveTimer");


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

    if (differenceInDays != 1)
        today.innerHTML = `<p>Today, there are <strong>${differenceInDays}</strong> days until the year 2030.</p>`
    else
        today.innerHTML = `<p>Today, there is <strong>${differenceInDays}</strong> day until the year 2030.</p>`
}

function dateTo2030() {

    let customDate = new Date(inputDateTo2030.value)

    let differenceInTime = date2030.getTime() - customDate.getTime()
    let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))

    if (differenceInDays != 1)
        custom.innerHTML = `<p>There are <strong>${differenceInDays}</strong> days until the year 2030 from this date.</p>`
    else
        custom.innerHTML = `<p>There is <strong>${differenceInDays}</strong> day until the year 2030 from this date.</p>`
}


function twoDates() {

    let date1 = new Date(daysBetween1.value);
    let date2 = new Date(daysBetween2.value);

    let differenceInTime = date2.getTime() - date1.getTime();

    let differenceInDays = Math.abs(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays != 1)
        betwixt.innerHTML = `<p>There are <strong>${differenceInDays}</strong> days between these dates.</p>`
    else
        betwixt.innerHTML = `<p>There is <strong>${differenceInDays}</strong> day between these dates.</p>`
}

function display_ct7() {
    var x = new Date()
    var ampm = x.getHours() >= 12 ? ' PM' : ' AM';
    hours = x.getHours() % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;

    var minutes = x.getMinutes().toString()
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    var seconds = x.getSeconds().toString()
    seconds = seconds.length == 1 ? 0 + seconds : seconds;

    var month = (x.getMonth() + 1).toString();
    month = month.length == 1 ? 0 + month : month;

    var dt = x.getDate().toString();
    dt = dt.length == 1 ? 0 + dt : dt;

    var x1 = month + "/" + dt + "/" + x.getFullYear();
    x1 = x1 + " - " + hours + ":" + minutes + ":" + seconds + " " + ampm;
    liveUpdate.innerHTML = x1;
    display_c7();

}

function display_c7() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct7()', refresh)
}

display_c7()