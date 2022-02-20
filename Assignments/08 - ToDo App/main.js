$(document).ready(() => {
    var backImage = $(".bgImg");
    var list = $("#toDoList");
    var active = $(".incomplete");
    var completed = $(".completed")
    var entry = $("#toDoEntry");
    var mode = $(".theme")
    var darkMode = false;
    var finished = false;
    var removeItem = $(".cross")

    // Dark theme toggle
    function darkTheme() {
        $(backImage).attr("src", "images/bg-mobile-dark.jpg");
        $(mode).attr("src", "images/icon-sun.svg");

        darkMode = true;
    }
    // Light theme toggle
    function lightTheme() {
        $(backImage).attr("src", "images/bg-mobile-light.jpg");
        $(mode).attr("src", "images/icon-moon.svg");

        darkMode = false;
    }

    // Click to change themes
    mode.click(function (e) {
        e.preventDefault();

        if (darkMode != true)
            darkTheme()
        else
            lightTheme()
    });

    // Remove specific list item
    for (var i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener("click", function () {
            $(this).parent().remove();
        });
    }

    // Click to complete a task
    $("li").click(function (e) {
        e.preventDefault();

        if ($(this).hasClass("incomplete")) {
            $(this).attr("class", "completed");
            $(this).css({
                "text-decoration": "line-through",
                "color": "gray"
            })
        } else {
            $(this).attr("class", "incomplete");
            $(this).css({
                "text-decoration": "none",
                "color": "black"
            })
        }
    })
})