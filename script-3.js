function startCountdown() {
    var endDate = new Date();
    endDate.setHours(24, 0, 0, 0); // Set end time to midnight

    var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = endDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        document.getElementById("countdown-hour").innerHTML = hours;
        document.getElementById("countdown-minute").innerHTML = minutes;
        document.getElementById("countdown-second").innerHTML = seconds;

        if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-hour").innerHTML = "00";
        document.getElementById("countdown-minute").innerHTML = "00";
        document.getElementById("countdown-second").innerHTML = "00";
        }
    }, 1000);
}

startCountdown();  