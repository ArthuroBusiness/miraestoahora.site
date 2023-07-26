const secondsToButtonsAppear = 1200

const actionButtons = document.querySelector('.buttons-action');
const pricesSection = document.querySelector('.prices');

const changeActualTime = setInterval(() => {
  const updatedTime = document.querySelector('span.smartplayer-ptime')
  const [minute, second] = updatedTime.innerHTML.split(':')

  const passedSeconds = +minute * 60 + +second

  if (passedSeconds >= secondsToButtonsAppear) {
    actionButtons.style.display = 'flex';
    pricesSection.style.display = 'flex';
  } else {
    actionButtons.style.display = 'none';
    pricesSection.style.display = 'none';
  }
}, 1 * 1000)
