$(document).ready(() => {

    var id = 0;
    var listOfCredentials = []

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

    $(createBtn).click((e) => {
        e.preventDefault();
        id++;

        if ($(passSignInput).val() === $(confirmPassInput).val()) {
            $(signUpPage).hide();
            $(dashboardPage).show();
            $(accName).text($(userNameInput).val());
        } 
        else
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

    function credentials (userName, name, email, password, phone)
    {
        this.userName = userNameInput;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

})