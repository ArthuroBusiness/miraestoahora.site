const actionButtons = document.querySelector('.buttons-action');

const timeOutButtons = setTimeout(() => {
  actionButtons.style.display = 'flex';
  clearTimeout(timeOutButtons);
}, 1800 * 1000); // Faz o actionButtons ser mostrado após 15 segundos
