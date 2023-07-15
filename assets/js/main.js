const actionButtons = document.querySelector('.buttons-action');

const timeOutButtons = setTimeout(() => {
  actionButtons.style.display = 'flex';
  clearTimeout(timeOutButtons);
}, 3 * 1000); // Faz o actionButtons ser mostrado após 15 segundos
