const secondsToButtonsAppear = 1540

const actionButtons = document.querySelector('.buttons-action');
const pricesSection = document.querySelector('.prices');

const getVideoTime = setInterval(() => {
  const video = document.querySelector('video')
  if (!video) return

  video.addEventListener('timeupdate', () => {
    const passedSeconds = video.currentTime
    
    if (passedSeconds >= secondsToButtonsAppear) {
      actionButtons.style.display = 'flex';
      pricesSection.style.display = 'flex';
    } else {
      actionButtons.style.display = 'none';
      pricesSection.style.display = 'none';
    }
  });


  clearInterval(getVideoTime)
}, 1 * 1000)
