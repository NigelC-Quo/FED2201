// $(document).ready(() => {

//     var listOfCredentials = [];

//      var loginPage = $("#login");
//      var signUpPage = $("#signup")
//      var dashboardPage = $("#dashboard");
 
//      var userNameInput = $("#userName");
//      var nameInput = $("#name");
//      var emailSignInput = $("#emailSign");
//      var passSignInput = $("#passSign");
//      var confirmPassInput = $("#confirmPass");
//      var phoneInput = $("#phone");
//      var emailLogInput = $("#emailLog");
//      var passLogInput = $("#passLog");

//      var accName = $("#accName");
 
//      var createBtn = $("#createBtn");
//      var loginBtn = $("#loginBtn");


//     // Create button should see if the inputted username and email match
//     // with existing users, if not, submit username, email, and password to the firebase
//     // if the passwords match AND are not empty. The account name should also reflect the 
//     // inputted username 
//     $(createBtn).click((e) => {
//         e.preventDefault();

//         let username = $(userNameInput).val();
//         let nameVal = $(nameInput).val();
//         let email = $(emailSignInput).val();
//         let pass = $(passSignInput).val();
//         let cPass = $(confirmPassInput).val();
//         let phone = $(phoneInput).val();


//         let foundUser = listOfCredentials.find(user => user.username === username)
//         let foundEmail = listOfCredentials.find(user => user.email === email)


//         if (!foundUser && !foundEmail) {

//             if (pass && cPass !== "" && pass === cPass) {
//                 listOfCredentials.push(new credentials(userName, nameVal, email, pass, phone))
//                 postUserToFB(username, email, pass)
//                 $(signUpPage).hide();
//                 $(dashboardPage).show();
//                 $(accName).text(username);
//             } else
//                 alert("Passwords do not match");
//         } else
//             alert("User or email already exits");
//     })

//     // Login Button when click should check the firebase to see if username
//     // and password match up, if so then go to dash and the account name will
//     // that user
//     $(loginBtn).click((e) => {
//         e.preventDefault();


//         let email = $(emailLogInput).val();
//         let password = $(passLogInput).val();

//         let foundEmail = listOfCredentials.find(user => user.email === email)
//         let foundPass = listOfCredentials.find(user => user.password === password)


//         if (foundEmail && foundPass) {

//             $(loginPage).hide();
//             $(dashboardPage).show();
//             $(accName).text(foundEmail.username);
//         } else
//             alert("Invalid email or password");
//     })

//     // Constructor function
//     function credentials(userName, name, email, password, phone) {
//         this.userName = userName;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.phone = phone;
//     }
// })