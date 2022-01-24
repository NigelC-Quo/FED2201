// DOM Manipulation
var listOfCars = [];
var submitCarButton = document.getElementById("submit-cars");

var carMakeInput = document.getElementById("car-make");
var carModelInput = document.getElementById("car-model");
var carYearInput = document.getElementById("car-year");

var carSubmittedElement = document.getElementById("grid-of-cars-submitted");

// console.dir(submitCarButton);


submitCarButton.addEventListener("click", () => {
    event.preventDefault();

    // print information
    console.log(`Car Information submitted: 
    \nMake:${carMakeInput.value}
    \nModel:${carModelInput.value}
    \nYear:${carYearInput.value}`)

    // clear input fields
    /*if (carMakeInput.value == "")
        carMakeInput.value = "Dummy";
    if (carModelInput.value == "")
        carModelInput.value = "Dummy";
    if (carYearInput.value == "")
        carYearInput.value = "Dummy";*/

    // attach to some stored value
    listOfCars.push(new Car(carMakeInput.value, carModelInput.value,
        carYearInput.value))


    // add the submitted car to the Ol in the HTML
    // pull the innerHTML,_
    let existingListOfCarsHTML = carSubmittedElement.innerHTML

    // now add in new data
    carSubmittedElement.innerHTML = `
        ${existingListOfCarsHTML}
        <div> 
        <div class="gridItems"><strong>Make: </strong> ${carMakeInput.value} </div>
        <div class="gridItems"><strong>Model: </strong> ${carModelInput.value} </div>
        <div class="gridItems"><strong>Year: </strong>  ${carYearInput.value} </div>
        </div>   
        `

        /*if (carMakeInput.value == "Dummy")
        carMakeInput.value = "";
        if (carModelInput.value == "Dummy")
        carModelInput.value = "";
        if (carYearInput.value == "Dummy")
        carYearInput.value = "";*/


    //alert("Submitted was clicked!")
})

// Constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}