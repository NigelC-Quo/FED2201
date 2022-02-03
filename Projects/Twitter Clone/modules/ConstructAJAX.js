// $(document).ready(() => {
    
//     // Constructor function
//     function credentials(userName, name, email, password, phone) {
//         this.userName = userName;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//         this.phone = phone;
//     }

//     // post data to DB
//     function postUserToFB(username, email, pass, tweets) {
//         $.post(`${firebaseUrl}/users${jsonExit}`,
//             JSON.stringify({
//                 email: email,
//                 password: pass,
//                 username: username,
//                 tweets: tweets
//             })).then(console.log("data created!"))
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