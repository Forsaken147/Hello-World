const countdown = document.querySelector('.countdown');


// Countdown launch date

const launchDate = new Date('March 1, 2019 16:00:00').getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();

  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(distance % (1000 * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);


  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${minutes}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `

  if (distance < 0) {
    clearInterval(interval);

    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Today is opening day'
  }

}, 1000);