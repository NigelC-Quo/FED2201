$(document).ready(() => {

    var listOfCredentials = [];
    var listOfTweets = [];
    var firebaseUrl = "https://twitter-clone-51246-default-rtdb.firebaseio.com";
    var jsonExit = ".json";
    var fullFirebase
    var user;
    var tweeter;

    var splashPage = $("#splash");
    var loginPage = $("#login");
    var signUpPage = $("#signup")
    var dashboardPage = $("#dashboard");
    var splashLogin = $("#splashLogin");
    var splashSignUp = $("#splashSignUp");
    var loginText = $("#loginText");
    var signUpText = $("#signUpText");
    var logOutBtn = $("#logOut");


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

    var growlBtn = $("#growlNow");
    var growlConfirm = $("#submit");
    var growlArea = $("#growlBox");


    // General buttons that hide and show pages
    // GetUser is called so that it's not out of scope
    splashLogin.click((e) => {
        e.preventDefault();

        $(splashPage).hide();
        $(loginPage).show();
        getUser();

    })

    splashSignUp.click((e) => {
        e.preventDefault();

        $(splashPage).hide();
        $(signUpPage).show();
        getUser();

    })

    loginText.click((e) => {
        e.preventDefault();

        $(signUpPage).hide();
        $(loginPage).show();
        resetForm();
        getUser();
    })

    signUpText.click((e) => {
        e.preventDefault();

        $(loginPage).hide();
        $(signUpPage).show();
        resetForm();
        getUser();
    })

    logOutBtn.click((e) => {
        e.preventDefault();

        $(dashboardPage).hide();
        $(splashPage).show();
        resetForm();
    })

    // Create button should see if the inputted username and email match
    // with existing users, if not, submit username, email, and password to the firebase
    // if the passwords match AND are not empty. The account name should also reflect the 
    // inputted username 
    createBtn.click((e) => {
        e.preventDefault();

        let username = $(userNameInput).val();
        let nameVal = $(nameInput).val();
        let email = $(emailSignInput).val();
        let pass = $(passSignInput).val();
        let cPass = $(confirmPassInput).val();
        let phone = $(phoneInput).val();


        let foundUser = listOfCredentials.find(user => user.username === username)
        let foundEmail = listOfCredentials.find(user => user.email === email)

        if (!foundUser && !foundEmail) {

            if (pass && cPass !== "" && pass === cPass) {
                listOfCredentials.push(new credentials(username, nameVal, email, pass, phone))
                postUserToFB(username, email, pass)
                $(signUpPage).hide();
                $(dashboardPage).show();
                $(accName).text(username);
            } else
                alert("Passwords do not match");
        } else
            alert("User or email already exits");
    })

    // Login Button when click should check the firebase to see if username

    // and password match up, if so then go to dash and the account name will
    // that user
    loginBtn.click((e) => {
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

    // When clicked an input box shows up with 3 buttons, that will allow you
    // to edit, delete, and submit the input value. Tweets should also go to firebase
    // and be updated accordingly in the event of any changes 
    growlBtn.click((e) => {
        e.preventDefault();
        getTweet()

        let numID = 0;

        numID++

        $(`<div id="feed">
        <div id="gridItem">
        <p id="tweetID">${accName.text()}</p>
        <p id="numID">${numID.toString()}</p>
        <button id="update">Edit</button>
        <button id="delete">Delete</button>
        <button id="submit">Submit</button>
        </div>
        <input type="text" name="growlEdit" id="growlBox" placeholder="Growl Here..."/>
        </div>`).appendTo("#content");


        $("#update").hide();
        $("#growlNow").hide();

        $("#submit").click((e) => {
            e.preventDefault();

            getUser();


            let tweetC = $("#growlBox").val();
            numID = $("#numID").text();
            let foundUser = listOfCredentials.find(user => user.username === accName.text())
            let foundTweet = listOfTweets.find(tweeter => tweeter.numID === numID)


            $("#update").show();
            $("#submittedText").remove();
            console.log(foundUser)

            if ($("#growlBox").val() !== "") {
                postTweetToFB(tweetC, foundUser.username, numID)
                listOfTweets.push(new tweets(foundUser.username, tweetC, numID))
                $("#gridItem").find("#submit").hide();
                $("#feed").find("#growlBox").replaceWith(`<p id="submittedText">${tweetC}</p>`);
                $("#growlNow").show();
            } else {
                alert("There must be input before submission");
                $("#update").hide();
            }
        })

        $("#delete").click((e) => {
            e.preventDefault();

            let tweeted = $("#growlBox");

            if ($("#submittedText").text() !== "") {
                getTweet();
                numID = $("#numID").text();
                let foundID = listOfTweets.find(tweeter => tweeter.numID === numID)
                console.log(foundID)
                console.log(foundID.id)


                $.ajax({
                    type: "DELETE",
                    url: `${firebaseUrl}/tweets/${foundID.id}${jsonExit}`,
                    success: console.log(`DELETE was successful`)
                })


            }

            numID--

            $("#feed").remove();
            $("#gridItem").remove();
            tweeted.remove();
            $("#submittedText").remove();
            $("#growlNow").show();
            alert("Growl successfully deleted!")

        })

        $("#update").click((e) => {
            e.preventDefault();

            $(`<input type="text" name="growlEdit" id="growlBox" 
            placeholder="Growl Here..." value=""/>`).appendTo("#feed");
            $("#submittedText").hide();
            $("#submit").show();

        })


    })


    // Reset values every time a link is clicked
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

    // Constructor function
    function credentials(userName, name, email, password, phone) {
        this.userName = userName;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    function tweets(username, tweetContent, numID) {
        this.username = username;
        this.tweetContent = tweetContent;
        this.numID = numID;
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

    function postTweetToFB(tweetContent, user, numID) {
        $.post(`${firebaseUrl}/tweets${jsonExit}`,
            JSON.stringify({
                tweetContent: tweetContent,
                user: user,
                numID: numID
            })).then(console.log("tweet created!"))

    }

    function getUser() {
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
                        username: data[user].username, // user's username
                        email: data[user].email, // user's email
                        password: data[user].password // // user's password
                    })
                }
            }
        })

    }

    function getTweet() {
        // READ/get data from a database
        $.get(`${firebaseUrl}/tweets${jsonExit}`).then((data) => {
            fullFirebase = data
            // for each property returned from the first the fullFirebase object,
            // add each one to array of objects where an ID is now listed.

            for (tweeter in fullFirebase) {
                if (listOfTweets.includes(tweeter)) {
                    // don't do anything
                } else {
                    listOfTweets.push({
                        id: tweeter, // user's ID
                        username: data[tweeter].username, // user's username
                        tweetContent: data[tweeter].tweetContent, // user's tweets
                        numID: data[tweeter].numID // user's numID
                    })
                }
            }
        })
    }
})