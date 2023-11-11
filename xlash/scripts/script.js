const deadline = new Date("2023, 31 December");

function getLeftTime(d) {
  const currentTime = new Date();
  const differ = Date.parse(d) - currentTime;
  const months = Math.floor(differ / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((differ / (1000 * 60 * 60 * 24)) % 30, 4);
  const hours = Math.floor((differ / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((differ / (1000 * 60)) % 60);
  const seconds = Math.floor((differ / 1000) % 60);

  return {
    total: differ,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function checkZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

getTimerElements();

function getTimerElements() {
  if (deadline == 0) {
    clearInterval(setInt);
  } else {
    const monthsElem = document.querySelector(".timer-months"),
      daysElem = document.querySelector(".timer-days"),
      hoursElem = document.querySelector(".timer-hours"),
      minutesElem = document.querySelector(".timer-minutes"),
      secondsElem = document.querySelector(".timer-seconds");
    function setTimer() {
      monthsElem.textContent = checkZero(getLeftTime(deadline).months);
      daysElem.textContent = checkZero(getLeftTime(deadline).days);
      hoursElem.textContent = checkZero(getLeftTime(deadline).hours);
      minutesElem.textContent = checkZero(getLeftTime(deadline).minutes);
      secondsElem.textContent = checkZero(getLeftTime(deadline).seconds);
    }
    setTimer();
  }
}

const setInt = setInterval(getTimerElements, 1000);
