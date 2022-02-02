$(document).ready(() => {

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

    $(createBtn).click(() => {

        if ($(passSignInput).val() === $(confirmPassInput).val()) {
            $(signUpPage).hide();
            $(dashboardPage).show();
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

})