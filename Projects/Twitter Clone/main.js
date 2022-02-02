$(document).ready(() => {

    var id = 0;
    var listOfCredentials = [];

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
    var logOutBtn = $("#logOut")


    $(splashLogin).click(() => {

        $(splashPage).hide();
        $(loginPage).show();

    })

    $(splashSignUp).click(() => {

        $(splashPage).hide();
        $(signUpPage).show();

    })

    $(loginText).click(() => {

        $(signUpPage).hide();
        $(loginPage).show();
        resetForm();
    })

    $(signUpText).click(() => {

        $(loginPage).hide();
        $(signUpPage).show();
        resetForm();
    })

    $(logOutBtn).click(() => {

        $(dashboardPage).hide();
        $(splashPage).show();
        resetForm();
    })

    $(createBtn).click((e) => {
        e.preventDefault();

        let userName = $(userNameInput).val();
        let nameVal = $(nameInput).val();
        let email = $(emailSignInput).val();
        let pass = $(passSignInput).val();
        let cPass = $(confirmPassInput).val();
        let phone = $(phoneInput).val();

        if (pass === cPass) {
            id++;
            listOfCredentials.push(new credentials(id, userName, nameVal, email, pass, phone))
            console.log(listOfCredentials);
            $(signUpPage).hide();
            $(dashboardPage).show();
            $(accName).text(userName);
        } else
            alert("Passwords do not match");
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

    function credentials(id, userName, name, email, password, phone) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

})