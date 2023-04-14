import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('#vimeo-player');
const newplayer = new Player(videoEl);
const STORAGE_KEY = 'videoplayer-current-time';

const saveTime = throttle(
  data => localStorage.setItem(STORAGE_KEY, data.seconds),
  1000
);

newplayer.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then();
newplayer.on('timeupdate', saveTime);
