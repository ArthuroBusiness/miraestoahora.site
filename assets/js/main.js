const secondsToButtonsAppear = 3
const milliseconds = secondsToButtonsAppear * 1000

const actionButtons = document.querySelector('.buttons-action');
const pricesSection = document.querySelector('.prices');

const timeOutButtons = setTimeout(() => {
  actionButtons.style.display = 'flex';
  pricesSection.style.display = 'flex';
  clearTimeout(timeOutButtons);
}, milliseconds);