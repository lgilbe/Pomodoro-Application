var timeLeft = 1500;
var minutes, seconds = 0;


var x = setInterval(function() {
    // Driver for seconds to minutes:seconds
    minutes = parseInt(timeLeft/60, 10)
    seconds = parseInt( timeLeft%60, 10)
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // Apply new time format
    document.getElementById("timer").innerHTML = minutes + ":" + seconds
    timeLeft = timeLeft - 1
}, 1000);
