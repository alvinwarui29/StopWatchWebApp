$(function() {
    var mode = 0;
    var timeCounter = 0;
    var lapCounter = 0;
    var action;
    var lapNumber = 0;

    var timeMinutes, timeSeconds, timecentiSeconds, lapminutes, lapseconds, lapcentiseconds;

    hideshow("#startbutton", "#lapbutton");

    $("#startbutton").click(function() {
        mode = 1;
        hideshow("#stopbutton", "#lapbutton");
        startaction();

    });
    $("#stopbutton").click(function() {
        hideshow("#resumebutton", "#resetbutton");
        clearInterval(action);
    });

    $("#resumebutton").click(function() {
        hideshow("#stopbutton", "#lapbutton");
        startaction();
    });
    $("#resetbutton").click(function() {
        location.reload();
    });

    $("#lapbutton").click(function() {
        if (mode) {
            clearInterval(action);
            lapCounter = 0;
            addlap();
            startaction();
        }
    });



    function hideshow(x, y) {
        $(".control").hide();
        $(x).show();
        $(y).show();
    }

    function startaction() {
        action = setInterval(function() {
            timeCounter++;
            lapCounter++;
            updatetime();
        }, 10);

    }

    function updatetime() {
        timeMinutes = Math.floor(timeCounter / 6000);
        timeSeconds = Math.floor(timeCounter % 6000 / 100);
        timecentiSeconds = (timeCounter % 6000) % 100;

        $("#timeminute").text(checkno(timeMinutes) + ":");
        $("#timesecond").text(checkno(timeSeconds) + ":");
        $("#timecentisecond").text(checkno(timecentiSeconds));

        lapMinutes = Math.floor(lapCounter / 6000);
        lapSeconds = Math.floor(lapCounter % 6000 / 100);
        lapcentiSeconds = (lapCounter % 6000) % 100;

        $("#lapminute").text(checkno(lapMinutes) + ":");
        $("#lapsecond").text(checkno(lapSeconds) + ":");
        $("#lapcentisecond").text(checkno(lapcentiSeconds));
    }

    function checkno(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    function addlap() {
        lapNumber++
        var mylapdetails = '<div class="lup">' +
            '<div class="luptitle">' +
            'lap ' + lapNumber +
            '</div>' +
            '<div class="luptime">' +
            '<span>' + checkno(lapMinutes) + '</span>' +
            ':<span>' + checkno(lapSeconds) + '</span>' +
            ':<span>' + checkno(lapcentiSeconds) + '</span>' +
            '</div>' +

            '</div>';
        $(mylapdetails).prependTo("#lapstimes");
    }

});