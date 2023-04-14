import Player from '@vimeo/player';

const videoEl = document.querySelector('#vimeo-player');
const newPlayer = new Player(videoEl);
const STORAGE_KEY = 'videoplayer-current-time';

const saveTime = throttle(
  data => localStorage.setItem(STORAGE_KEY, data.seconds),
  1000
);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then();
player.on('timeupdate', savePlayerTime);
