var CC9 = document.getElementsByClassName("CC9");
var CC10 = document.getElementsByClassName("CC10");
var inputDateTo2030 = document.getElementById("2030ID");
var daysBetween = document.getElementById("between2Dates");
var fromTodayBtn = document.getElementById("2030Btn");
const date2030 = new Date("01/01/2030");
var today = new Date();


fromTodayBtn.addEventListener('click', e => {
    e.preventDefault()

    todayTo2030()
    dateTo2030()
});

function todayTo2030() {

    let differenceInTime = date2030.getTime() - today.getTime();
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    console.log(differenceInDays)
}

function dateTo2030() {

    let diff = new Date(inputDateTo2030.value)

    let differenceInTime = date2030.getTime() - diff.getTime()
    let differenceInDays = differenceInTime / (1000 * 3600 * 24)

    console.log(differenceInDays)
}

function twoDates() {
    
    // JavaScript program to illustrate
    // calculation of no. of days between two date
    
    // To set two dates to two variables
    var date1 = new Date("02/18/2022");
    var date2 = new Date("02/18/2023");
    
    // To calculate the time difference of two dates
    var differenceInTime = date2.getTime() - date1.getTime();
    
    // To calculate the no. of days between two dates
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    
    //To display the final no. of days (result)
    document.write("Total number of days between dates <br>" +
        date1 + "<br> and <br>" +
        date2 + " is: <br> " +
        differenceInDays);
}