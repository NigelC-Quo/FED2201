$(document).ready(() => {
    var backImage = $(".bgImg");
    var list = $("#toDoList");
    var active = $(".incomplete");
    var completed = $(".completed")
    var entry = $("#toDoEntry");
    var mode = $(".theme")
    var darkMode = false;
    var removeItem = $(".cross")

    // Dark theme toggle
    function darkTheme() {
        $(backImage).attr("src", "images/bg-mobile-dark.jpg");
        $(mode).attr("src", "images/icon-sun.svg");
        $("body").css({
            "background-color": "hsl(235, 21%, 11%)"
        })
        $(entry).css({
            "background-color": "hsl(235, 24%, 19%)"
        })
        $("#left-clear").css({
            "color": "hsl(233, 14%, 35%)",
            "background-color": "hsl(235, 24%, 19%)"
        })
        $("#tab").css({
            "color": "hsl(233, 14%, 35%)",
            "background-color": "hsl(235, 24%, 19%)"
        })

        darkMode = true;
    }
    // Light theme toggle
    function lightTheme() {
        $(backImage).attr("src", "images/bg-mobile-light.jpg");
        $(mode).attr("src", "images/icon-moon.svg");
        $("body").css({
            "background-color": "hsl(0deg 2% 95%)"
        })
        $(entry).css({
            "background-color": "white"
        })
        $("#left-clear").css({
            "color": "hsl(236, 9%, 61%)",
            "background-color": "white"
        })
        $("#tab").css({
            "color": "hsl(236, 9%, 61%)",
            "background-color": "white"
        })

        darkMode = false;
    }

    // Click to change themes
    mode.on("click", list, (function (e) {
        e.preventDefault();

        if (darkMode != true) {
            darkTheme()
            $("li").css({
                "color": "white",
                "background-color": "hsl(235, 24%, 19%)",
                "border-bottom": "1px solid hsl(234, 11%, 52%)"
            })
        } else
        {
            lightTheme()
            $("li").css({
                "color": "hsl(235, 19%, 35%)",
                "background-color": "white",
                "border-bottom": "1px solid hsl(233, 11%, 84%)"
            })
        }

    }));

    // Remove specific list item
    for (var i = 0; i < removeItem.length; i++) {
        removeItem[i].addEventListener("click", function () {
            $(this).parent().remove();
        });
    }

    // Click to complete a task or revert back to active
    list.on("click", "li", function (e) {
        e.preventDefault();

        if ($(this).hasClass("incomplete")) {
            $(this).attr("class", "completed");
            if (darkMode == false)
                $(this).css({
                    "text-decoration": "line-through",
                    "color": "hsl(236, 33%, 92%)"
                })

            else
                $(this).css({
                    "text-decoration": "line-through",
                    "color": "hsl(233, 14%, 35%)"
                })
        } else {
            $(this).attr("class", "incomplete");
            if (darkMode == false)
                $(this).css({
                    "text-decoration": "none",
                    "color": "hsl(235, 19%, 35%)"
                })

            else
                $(this).css({
                    "text-decoration": "none",
                    "color": "white"
                })
        }
    })

    // Add a task
    entry.bind("enterKey", function (e) {

        alert("Task entered");

        list.append(`<li class="incomplete"><img class="cross" src="images/icon-cross.svg" alt="cross">${entry.val()}</li>`);

        list.on('click', '.cross', function () {
            $(this).parent().remove();
        });

        entry.val("");
    });


    entry.keydown(function (e) {

        if (e.keyCode == 13 && entry.val() !== "") {

            e.preventDefault()
            $(this).trigger("enterKey");

        } else if (e.keyCode == 13 && entry.val() == "") {

            e.preventDefault()
            alert("Task can't be blank");
        }
    });
})