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
    var emailInput = $("#email");
    var passInput = $("#pass");
    var confirmPassInput = $("#confirmPass");
    var phoneInput = $("#phone");
    var createBtn = $("#creatBtn");



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

    })

    $(signUpText).click(() => {

        $(loginPage).hide();
        $(signUpPage).show();

    })

    $(createBtn).click(() => {

        $(signUpPage).hide();
        $(dashboardPage).show();


    })

})