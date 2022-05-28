const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const _ = require('lodash');

//---------------local storage----------------
const storage = {
  addItem(key, value) {
    const result = JSON.stringify(value);
    return localStorage.setItem(key, result);
  },

  getItem(key) {
    try {
      const payload = localStorage.getItem(key);
      return JSON.parse(payload);
    } catch (error) {
      console.log(error);
    }
  },
};

//---------------------------------------------

const currentTimeTracker = function (data) {
  if (!storage.getItem('videoplayer-current-time')) {
    storage.addItem('videoplayer-current-time', 0);
  }
  storage.addItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', _.throttle(currentTimeTracker, 1000));

player
  .setCurrentTime(storage.getItem('videoplayer-current-time'))
  .then(seconds => {
    return seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
