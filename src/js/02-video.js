import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  //   {
  //     duration: 61.857;
  //     percent: 0.049;
  //     seconds: 3.034;
  //   }
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', onPlay);
