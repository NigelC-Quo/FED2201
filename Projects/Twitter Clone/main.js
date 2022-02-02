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

})