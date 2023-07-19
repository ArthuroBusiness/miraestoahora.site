const actionButtons = document.querySelector('.buttons-action');
const pricesSection = document.querySelector('.prices');

const timeOutButtons = setTimeout(() => {
  actionButtons.style.display = 'flex';
  pricesSection.style.display = 'flex';
  clearTimeout(timeOutButtons);
}, 995 * 1000); // Faz o actionButtons ser mostrado após 15 segundos
