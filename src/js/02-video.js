import player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new npmPlayer(iframe);

    player.getVideoTitle().then(function(title) {});
        
    const onPlay = function(data) {
        const currentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', currentTime);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
    .setCurrentTime(localStorage.setItem('videoplayer-current-time', currentTime)).
    then(function (seconds) { })
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });