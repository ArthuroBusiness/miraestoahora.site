const secondsToButtonsAppear = 10

const actionButtons = document.querySelector('.buttons-action');
const pricesSection = document.querySelector('.prices');

// const changeActualTime = setInterval(() => {
//   const updatedTime = document.querySelector('span.smartplayer-ptime')
//   if (!updatedTime) return
//   const [minute, second] = updatedTime.innerHTML.split(':')

//   const passedSeconds = +minute * 60 + +second

//   if (passedSeconds >= secondsToButtonsAppear) {
//     actionButtons.style.display = 'flex';
//     pricesSection.style.display = 'flex';
//   } else {
//     actionButtons.style.display = 'none';
//     pricesSection.style.display = 'none';
//   }
// }, 1 * 1000)


const getVideoTime = setInterval(() => {
  const video = document.querySelector('video')
  if (!video) return
  // const [minute, second] = updatedTime.innerHTML.split(':')

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
