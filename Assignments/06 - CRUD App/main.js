// DOM Manipulation
var listOfCrud = [];
var submitCrudButton = document.getElementById("submit-crud");

var firstNameInput = document.getElementById("first-name");
var middleNameInput = document.getElementById("middle-name");
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
var addressInput = document.getElementById("address");
var dobInput = document.getElementById("dob");
var cityInput = document.getElementById("city");
var stateInput = document.getElementById("state");
var zipInput = document.getElementById("zip");


var crudSubmittedElement = document.getElementById("grid-of-crud-submitted");


submitCrudButton.addEventListener("click", () => {
    event.preventDefault()

    let first = firstNameInput.value;
    let middle = middleNameInput.value;
    let last = lastNameInput.value;
    let email = emailInput.value;
    let address = addressInput.value;
    let dob = dobInput.value;
    let city = cityInput.value;
    let state = stateInput.value;
    let zip = zipInput.value;

    // In case nothing was entered
    if (firstNameInput.value == "")
        first = "Nothing";
    if (middleNameInput.value == "")
        middle = "Nothing";
    if (lastNameInput.value == "")
        last = "Nothing";
    if (emailInput.value == "")
        email = "Nothing";
    if (addressInput.value == "")
        address = "Nothing";
    if (dobInput.value == "")
        dob = "Nothing";
    if (cityInput.value == "")
        city = "Nothing";
    if (stateInput.value == "")
        state = "Nothing";
    if (zipInput.value == "")
        zip = "Nothing"


    // attach to some stored value
    listOfCrud.push(new Crud(first, middle, last,
        email, address, dob, city, state, zip))


    // now add in new data
    crudSubmittedElement.innerHTML = `
        <div id="grid-of-crud-submitted"> 
            <div class="gridItems"><strong>First: </strong>  ${first} </div>
            <div class="gridItems"><strong>Middle: </strong> ${middle} </div>
            <div class="gridItems"><strong>Last: </strong>  ${last}</div>
            <div class="gridItems"><strong>Email: </strong>  ${email} </div>
            <div class="gridItems"><strong>Address: </strong>  ${address} </div>
            <div class="gridItems"><strong>Date of Birth: </strong>  ${dob} </div>
            <div class="gridItems"><strong>City: </strong>  ${city} </div>
            <div class="gridItems"><strong>State: </strong>  ${state} </div>
            <div class="gridItems"><strong>Zip: </strong>  ${zip} </div>
            <a onClick="onDelete(this)">Delete</a>   
        </div> 
        `

    resetFormAndUpdate();
})

// Constructor function
function Crud(fi, mi, la, em, ad, dob, ci, st, zi) {

    this.fi = fi;
    this.mi = mi;
    this.la = la;
    this.em = em;
    this.ad = ad;
    this.dob = dob;
    this.ci = ci;
    this.st = st;
    this.zi = zi;
}

function resetFormAndUpdate() {

    let existingListOfCrudHTML = crudSubmittedElement.innerHTML

    firstNameInput.value = "";
    middleNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    dobInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    zipInput.value = "";

    existingListOfCrudHTML.replace

}

function onDelete() {

    document.getElementById("grid-of-crud-submitted").innerHTML = null;
    listOfCrud.length = 0;

}