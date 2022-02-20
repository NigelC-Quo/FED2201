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
        $("body").css({"background-color": "hsl(235, 21%, 11%)"})
        $(entry).css({"background-color": "hsl(235, 24%, 19%)"})
        $("li").css({"color": "white", "background-color": "hsl(235, 24%, 19%)", "border-bottom": "1px solid hsl(234, 11%, 52%)"})
        $("#left-clear").css({"color": "hsl(233, 14%, 35%)", "background-color": "hsl(235, 24%, 19%)"})
        $("#tab").css({"color": "hsl(233, 14%, 35%)","background-color": "hsl(235, 24%, 19%)"})
        
        darkMode = true;
    }
    // Light theme toggle
    function lightTheme() {
        $(backImage).attr("src", "images/bg-mobile-light.jpg");
        $(mode).attr("src", "images/icon-moon.svg");
        $("body").css({"background-color": "hsl(0deg 2% 95%)"})
        $(entry).css({"background-color": "white"})
        $("li").css({"color": "hsl(235, 19%, 35%)", "background-color": "white", "border-bottom": "1px solid hsl(233, 11%, 84%)"})
        $("#left-clear").css({"color": "hsl(236, 9%, 61%)", "background-color": "white"})
        $("#tab").css({"color": "hsl(236, 9%, 61%)","background-color": "white"})
        
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

    // Click to complete a task or revert back to active
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

    // Add a task

})