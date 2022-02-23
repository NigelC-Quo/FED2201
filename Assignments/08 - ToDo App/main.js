$(document).ready(() => {
    var backImage = $(".bgImg");
    var backImage2 = $(".bgImgD");
    var list = $("#toDoList");
    var entry = $("#toDoEntry");
    var mode = $(".theme")
    var darkMode = false;
    var leftClear = $("#left-clear")
    var num;
    var clear = $("#clear");
    var allTab = $("#allTab");
    var activeTab = $("#activeTab");
    var completedTab = $("#completedTab");
    var enter = $(".circleEntry");

    // Dark theme toggle
    function darkTheme() {

        $(backImage).attr("src", "images/bg-mobile-dark.jpg");
        $(backImage2).attr("src", "images/bg-desktop-dark.jpg");

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
        $("#tab button :not(.currentTab)").css({
            "color": "hsl(233, 14%, 35%)",
            "background-color": "hsl(235, 24%, 19%)"
        })
        $(clear).css({
            "color": "hsl(233, 14%, 35%)",
            "background-color": "hsl(235, 24%, 19%)"
        })
        $("#drag").css({
            "color": "hsl(233, 14%, 35%)",
        })

        darkMode = true;
    }

    // Light theme toggle
    function lightTheme() {

        $(backImage).attr("src", "images/bg-mobile-light.jpg");
        $(backImage2).attr("src", "images/bg-desktop-light.jpg");

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
        $("#tab button :not(.currentTab)").css({
            "color": "hsl(236, 9%, 61%)",
            "background-color": "white"
        })
        $(clear).css({
            "color": "hsl(236, 9%, 61%)",
            "background-color": "white"
        })
        $("#drag").css({
            "color": "hsl(236, 9%, 61%)",
        })

        darkMode = false;
    }

    // Click to change themes
    mode.on("click", list, (function (e) {
        e.preventDefault();

        if (darkMode != true) {
            darkTheme()
            $("li").css({
                "background-color": "hsl(235, 24%, 19%)",
                "border-bottom": "1px solid hsl(234, 11%, 52%)"
            })
            $(".incomplete").css({
                "color": "white"
            })
            $(".completed").css({
                "color": "hsl(233, 14%, 35%)"
            })
        } else {
            lightTheme()
            $("li").css({
                "background-color": "white",
                "border-bottom": "1px solid hsl(233, 11%, 84%)"
            })
            $(".incomplete").css({
                "color": "hsl(235, 19%, 35%)"
            })
            $(".completed").css({
                "color": "hsl(236, 33%, 92%)"
            })
        }

    }));

    // Click to complete a task or revert back to active
    list.on("click", "li", function (e) {
        e.preventDefault();

        if ($(this).hasClass("incomplete")) {

            $(this).attr("class", "completed");

            $(this).find(".check").show();

            checkList()

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

            $(this).find(".check").hide();

            checkList()

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
    enter.click(function (e) {
        e.preventDefault()

        if (entry.val() == "")
            return alert("Task can't be blank")

        else {

            list.append(`<li class="incomplete"><img style=""class="check" src="images/icon-check.svg" alt="check">
            <img class="cross" src="images/icon-cross.svg" alt="cross">${entry.val()}</li>`);

            list.find(".check").hide();

            checkList()

            if (darkMode == true) {
                $("li").css({
                    "color": "white",
                    "background-color": "hsl(235, 24%, 19%)",
                    "border-bottom": "1px solid hsl(234, 11%, 52%)"
                })
            }

            list.on('click', '.cross', function () {
                $(this).parent().remove();
                checkList()
            });

            entry.val("");
        }
    });

    // Prevent page refresh
    $(entry).keypress((e) => {
        e.preventDefault()
    })

    // Clear all completed tasks
    clear.click(function (e) {
        e.preventDefault();

        clearCompleted();
    });

    allTab.click(function (e) {
        e.preventDefault();

        $(this).attr("class", "currentTab");
        $(activeTab).removeClass("currentTab");
        $(completedTab).removeClass("currentTab");


        allView();
    });

    activeTab.click(function (e) {
        e.preventDefault();

        $(this).attr("class", "currentTab");
        $(allTab).removeClass("currentTab");
        $(completedTab).removeClass("currentTab");

        activeView();
    });

    completedTab.click(function (e) {
        e.preventDefault();

        $(this).attr("class", "currentTab");
        $(activeTab).removeClass("currentTab");
        $(allTab).removeClass("currentTab");

        completeView();
    });

    // Check how many active items are left
    function checkList() {
        list.each(function () {
            num = $(this).find('.incomplete').length;

            if (num != 1)
                leftClear.text(`${num} items left`)

            else
                leftClear.text(`${num} item left`)
        });
    }

    function clearCompleted() {

        list.each(function () {
            let comp = $(list).find('.completed');

            $(comp).remove();
        });
    }

    function allView() {

        list.each(function () {
            let comp = $(list).find('.completed');
            let notComp = $(list).find('.incomplete');

            comp.show();
            notComp.show();

            $(allTab).css({
                "color": "rgb(0 137 255)"
            })

        });

        $(activeTab).css({
            "color": "unset"
        })
        $(completedTab).css({
            "color": "unset"
        })
    }

    function activeView() {

        list.each(function () {
            let comp = $(list).find('.completed');
            let notComp = $(list).find('.incomplete');

            comp.hide();
            notComp.show();

            $(activeTab).css({
                "color": "rgb(0 137 255)"
            })

        });

        $(allTab).css({
            "color": "unset",
        })
        $(completedTab).css({
            "color": "unset"
        })
    }

    function completeView() {

        list.each(function () {
            let comp = $(list).find('.completed');
            let notComp = $(list).find('.incomplete');

            comp.show();
            notComp.hide();
            $(completedTab).css({
                "color": "rgb(0 137 255)"
            })
        });

        $(activeTab).css({
            "color": "unset"
        })
        $(allTab).css({
            "color": "unset"
        })
    }

    function windowResize() {

        $(window).resize(function (e) {
            e.preventDefault()

            if ($(window).width() <= 375) {
                backImage2.hide();
                backImage.show();
            } else {
                backImage2.show();
                backImage.hide();
            }
        })
    }

    function windowRefresh() {

        if ($(window).width() <= 375) {
            backImage2.hide();
            backImage.show();
        } else {
            backImage2.show();
            backImage.hide();
        }
    }

    // Drag and reorder
    $(function () {
        $("#toDoList").sortable();
        $("#toDoList").disableSelection();
    });

    windowRefresh();
    windowResize();
    checkList();
    allView();
})