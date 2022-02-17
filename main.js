function objectToArray(obj) {
    var arr = [];

    for (const key in obj) {
        arr.push([key, obj[key]])
    }

    return console.log(arr)
}


var states = {
    GA: "Georgia",
    AL: "Alabama",
    TN: "Tennessee",
    CO: "Colorado"
}

var names = {
    name1: "John",
    name2: "Katie",
    name3: "Milo",
    name4: "Jasper",
    name5: "Larry"
}

objectToArray(states)
objectToArray(names)

var aList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue"
]

var aListID = $("#aList")

function addList(arr) {

    arr.forEach(element => {
       $(aListID).append(`<li>${element}</li>`)
    });
}

addList(aList)