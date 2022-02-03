// $(document).ready(() => {

//      var splashPage = $("#splash");
//      var loginPage = $("#login");
//      var signUpPage = $("#signup")
//      var dashboardPage = $("#dashboard");
//      var splashLogin = $("#splashLogin");
//      var splashSignUp = $("#splashSignUp");
//      var loginText = $("#loginText");
//      var signUpText = $("#signUpText");
//      var logOutBtn = $("#logOut");
//      var listOfCredentials = [];
//      var firebaseUrl = "https://twitter-clone-51246-default-rtdb.firebaseio.com";
//      var jsonExit = ".json";
//      var fullFirebase
//      var user;
//      var userNameInput = $("#userName");
//      var nameInput = $("#name");
//      var emailSignInput = $("#emailSign");
//      var passSignInput = $("#passSign");
//      var confirmPassInput = $("#confirmPass");
//      var phoneInput = $("#phone");
//      var emailLogInput = $("#emailLog");
//      var passLogInput = $("#passLog");
    
//     $(splashLogin).click((e) => {
//         e.preventDefault();

//         $(splashPage).hide();
//         $(loginPage).show();
//         getUser();

//     })

//     $(splashSignUp).click((e) => {
//         e.preventDefault();

//         $(splashPage).hide();
//         $(signUpPage).show();
//         getUser();

//     })

//     $(loginText).click((e) => {
//         e.preventDefault();

//         $(signUpPage).hide();
//         $(loginPage).show();
//         resetForm();
//         getUser();
//     })

//     $(signUpText).click((e) => {
//         e.preventDefault();

//         $(loginPage).hide();
//         $(signUpPage).show();
//         resetForm();
//         getUser();
//     })

//     $(logOutBtn).click((e) => {
//         e.preventDefault();

//         $(dashboardPage).hide();
//         $(splashPage).show();
//         resetForm();
//     })

//     // Reset values every time a link is clicked
//     function resetForm() {
//         $(userNameInput).val("");
//         $(nameInput).val("");
//         $(emailSignInput).val("");
//         $(passSignInput).val("");
//         $(confirmPassInput).val("");
//         $(phoneInput).val("");
//         $(emailLogInput).val("");
//         $(passLogInput).val("");
//     }

//     function getUser(){
//         // READ/get data from a database
//         $.get(`${firebaseUrl}/users${jsonExit}`).then((data) => {
//             fullFirebase = data
//             // for each property returned from the first the fullFirebase object,
//             // add each one to array of objects where an ID is now listed.

//             for (user in fullFirebase) {
//                 if (listOfCredentials.includes(user)) {
//                     // don't do anything
//                 } else {
//                     listOfCredentials.push({
//                         id: user, // user's ID
//                         username: data[user].username, // user's username
//                         email: data[user].email, // user's email
//                         password: data[user].password, // // user's password
//                         tweets: data[user].tweets // // user's password
//                     })
//                 }
//             }
//         })
//     }


// })