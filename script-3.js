<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Countdown Clock</title>
<style>
  .countdown {
    font-family: Arial, sans-serif;
    font-size: 24px;
    text-align: center;
    margin-top: 50px;
  }
  .digit {
    display: inline-block;
    margin: 0 10px;
    border-radius: 5px;
    background-color: #333;
    color: #fff;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 24px;
    transition: transform 0.5s ease-in-out;
  }
  .countdown .digit.moveUp {
    animation: moveUpAnimation 0.5s ease-in-out;
  }

  @keyframes moveUpAnimation {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
</head>
<body>

<div class="countdown" id="countdown">
  <span class="digit" id="hours">00</span>:
  <span class="digit" id="minutes">00</span>:
  <span class="digit" id="seconds">00</span>
</div>

<script>
  function countdown() {
    const now = new Date();
    const hours = 23 - now.getHours();
    const minutes = 59 - now.getMinutes();
    const seconds = 59 - now.getSeconds();

    updateDigit('hours', pad(hours));
    updateDigit('minutes', pad(minutes));
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function updateDigit(digitId, value) {
    const digitElement = document.getElementById(digitId);
    digitElement.classList.add('moveUp');
    setTimeout(() => {
      digitElement.textContent = value;
      digitElement.classList.remove('moveUp');
    }, 250); // Animation duration is 0.5s, so halfway through (250ms) we update the content
  }

  countdown();
  setInterval(countdown, 1000);
</script>

</body>
</html>