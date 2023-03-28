const actionButtons = document.querySelector('.buttons-action');

const timeOutButtons = setTimeout((120000) => {
  actionButtons.style.display = 'flex';
  clearTimeout(timeOutButtons);
}, 15 * 10000); // Faz o actionButtons ser mostrado após 15 segundos
