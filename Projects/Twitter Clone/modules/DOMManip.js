// $(document).ready(() => {

//     var growlBtn = $("#growlNow");
//     var growlConfirm = $("#growl");
//     var growlArea = $("#growlBox");

//     // When clicked an input box shows up with 3 buttons, that will allow you
//     // to edit, delete, and submit the input value. Tweets should also go to firebase
//     // and be updated accordingly in the event of any changes 
//     $(growlBtn).click((e) => {
//         e.preventDefault();

//         // now add in new data
//         $(".feed").html(`
//     <div id="feed"> 
//         <div class="gridItem">
//         <input type="text" name="growlEdit" id="growlBox"
//          placeholder="Growl Here..."/>
//         <button id="update">Edit</button>  
//         <button id="delete">Delete</button>  
//         <input type="submit" id="growl" value="Growl"/> 
//     </div> 
//     `)
//     })

//     growlConfirm.click((e) => {
//         e.preventDefault();

//         growlArea.html(`
//     ${growlArea.val()}`)

//         console.log("Function ran!!")
//     })
// })