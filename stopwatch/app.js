var min = 0
var sec = 0
var milisec = 0

var getmin = document.getElementById("min")
var getsec = document.getElementById("sec")
var getmiliSec = document.getElementById("msec")
var interval;



function start() {
    interval = setInterval(function () {
        milisec++
        getmiliSec.innerHTML = milisec
        if (milisec >= 100) {
            sec++
            getsec.innerHTML = sec
            milisec = 0
        }
        else if (sec >= 59) {
            min++
            getmin.innerHTML = min
            min = 0

        }
    }, 10);

    document.getElementById("start").disabled = true
}


function stop() {
    clearInterval(interval)

    document.getElementById("start").disabled = false
}



function reset() {
    clearInterval(interval)
    document.getElementById("start").disabled = false




    var zero = 0
    getMiliSec.innerHTML = zero
    getsec.innerHTML = zero
    getmin.innerHTML = zero
}


