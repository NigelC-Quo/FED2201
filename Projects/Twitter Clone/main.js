$(document).ready(() => {

    var listOfCredentials = [];
    var firebaseUrl = "https://twitter-clone-51246-default-rtdb.firebaseio.com";
    var jsonExit = ".json";
    var fullFirebase
    var user;

    var splashPage = $("#splash");
    var loginPage = $("#login");
    var signUpPage = $("#signup")
    var dashboardPage = $("#dashboard");
    var splashLogin = $("#splashLogin");
    var splashSignUp = $("#splashSignUp");
    var loginText = $("#loginText");
    var signUpText = $("#signUpText");


    var userNameInput = $("#userName");
    var nameInput = $("#name");
    var emailSignInput = $("#emailSign");
    var passSignInput = $("#passSign");
    var confirmPassInput = $("#confirmPass");
    var phoneInput = $("#phone");
    var emailLogInput = $("#emailLog");
    var passLogInput = $("#passLog");

    var accName = $("#accName");

    var createBtn = $("#createBtn");
    var loginBtn = $("#loginBtn");
    var growlBtn = $("#growl");
    var logOutBtn = $("#logOut");


    $(splashLogin).click((e) => {
        e.preventDefault();

        $(splashPage).hide();
        $(loginPage).show();
        getUser();

    })

    $(splashSignUp).click((e) => {
        e.preventDefault();

        $(splashPage).hide();
        $(signUpPage).show();
        getUser();

    })

    $(loginText).click((e) => {
        e.preventDefault();

        $(signUpPage).hide();
        $(loginPage).show();
        resetForm();
        getUser();
    })

    $(signUpText).click((e) => {
        e.preventDefault();

        $(loginPage).hide();
        $(signUpPage).show();
        resetForm();
        getUser();
    })

    $(logOutBtn).click((e) => {
        e.preventDefault();

        $(dashboardPage).hide();
        $(splashPage).show();
        resetForm();
    })

    $(createBtn).click((e) => {
        e.preventDefault();

        let username = $(userNameInput).val();
        let nameVal = $(nameInput).val();
        let email = $(emailSignInput).val();
        let pass = $(passSignInput).val();
        let cPass = $(confirmPassInput).val();
        let phone = $(phoneInput).val();


        let foundUser = listOfCredentials.find(user => user.username === username)
        let foundEmail = listOfCredentials.find(user => user.email === email)
        
        
        if (!foundUser || !foundEmail) {
            
            if (pass === cPass) {
                listOfCredentials.push(new credentials(userName, nameVal, email, pass, phone))
                postUserToFB(username, email, pass)
                $(signUpPage).hide();
                $(dashboardPage).show();
                $(accName).text(username);
            } else
                alert("Passwords do not match");
        } else
            alert("User or email already exits");
    })

    $(loginBtn).click((e) => {
        e.preventDefault();


        let email = $(emailLogInput).val();
        let password = $(passLogInput).val();
        
        let foundEmail = listOfCredentials.find(user => user.email === email)
        let foundPass = listOfCredentials.find(user => user.password === password)
        
        
        if (foundEmail && foundPass) {
    
                $(loginPage).hide();
                $(dashboardPage).show();
                $(accName).text(foundEmail.username);
        } else
            alert("Invalid email or password");
    })

    $(growlBtn).click((e) => {
        e.preventDefault();
    
    
        // now add in new data
        $(".feed").html(`
        <div class="feed"> 
            <div class="gridItem">
            <p>My first growl!</p>
            <button id="update">Update</button>  
            <button id="delete">Delete</button>  
            <button id="growl">Growl now</button>  
        </div> 
        `) 
    })

    function resetForm() {
        $(userNameInput).val("");
        $(nameInput).val("");
        $(emailSignInput).val("");
        $(passSignInput).val("");
        $(confirmPassInput).val("");
        $(phoneInput).val("");
        $(emailLogInput).val("");
        $(passLogInput).val("");
    }

    function credentials(userName, name, email, password, phone) {
        this.userName = userName;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    // post data to DB
    function postUserToFB(username, email, pass) {
        $.post(`${firebaseUrl}/users${jsonExit}`,
            JSON.stringify({
                email: email,
                password: pass,
                username: username
            })).then(console.log("data created!"))
    }

    function getUser(){
        // READ/get data from a database
        $.get(`${firebaseUrl}/users${jsonExit}`).then((data) => {
            fullFirebase = data
            // for each property returned from the first the fullFirebase object,
            // add each one to array of objects where an ID is now listed.

            for (user in fullFirebase) {
                if (listOfCredentials.includes(user)) {
                    // don't do anything
                } else {
                    listOfCredentials.push({
                        id: user, // user's ID
                        username: data[user].username,
                        email: data[user].email,
                        password: data[user].password
                    })
                }
            }
        })
    }
})