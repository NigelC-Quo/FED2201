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

// console.dir(submitCarButton);


submitCrudButton.addEventListener("click", () => {
    event.preventDefault()

    var first = firstNameInput.value;
    var middle = middleNameInput.value;
    var last = lastNameInput.value;
    var email = emailInput.value;
    var address = addressInput.value;
    var dob = dobInput.value;
    var city = cityInput.value;
    var state = stateInput.value;
    var zip = zipInput.value;


    // print information
    console.log(`Crud Information submitted: 
    \nFirst-Name:${first}
    \nMiddle-name:${middle}
    \nLast-Name:${last}
    \nEmail:${email}
    \nAddress:${address}
    \nDOB:${dob}
    \nCity:${city}
    \nState:${state}
    \nZip:${zip}
    `)


    // attach to some stored value
    listOfCrud.push(new Crud(first, middle, last,
        email, address, dob, city, state, zip))


    // add the submitted car to the Ol in the HTML
    // pull the innerHTML,_
    let existingListOfCrudHTML = crudSubmittedElement.innerHTML

    // now add in new data
    crudSubmittedElement.innerHTML = `
        ${existingListOfCrudHTML.replace}
        <h4>Submitted Info: </h4>
        <div id="grid-of-crud-submitted"> 
            <div class="gridItems"><strong>First-Name: </strong> ${first} </div>
            <div class="gridItems"><strong>Middle-Name: </strong> ${middle} </div>
            <div class="gridItems"><strong>Last-Name: </strong>  ${last}</div>
            <div class="gridItems"><strong>Email: </strong>  ${email} </div>
            <div class="gridItems"><strong>Address: </strong>  ${address} </div>
            <div class="gridItems"><strong>Date of Birth: </strong>  ${dob} </div>
            <div class="gridItems"><strong>City: </strong>  ${city} </div>
            <div class="gridItems"><strong>State: </strong>  ${state} </div>
            <div class="gridItems"><strong>Zip: </strong>  ${zip} </div>
            <a onClick="onDelete(this)">Delete</a>   
        </div> 
        `

    resetForm();

    //alert("Submitted was clicked!")
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

function resetForm() {

    firstNameInput.value = "";
    middleNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    dobInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    zipInput.value = "";

}

function onEdit() {

}

function onDelete() {

    document.getElementById("grid-of-crud-submitted").innerHTML = null;

}