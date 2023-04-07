const player = document.querySelector('.video-container');
const video = player.querySelector('.myVid');
const progress = player.querySelector('.time-bar');
const progressFill = player.querySelector('.time-fill');
const playPause = player.querySelector('#play_button');
const stopVid = player.querySelector('#stop')
const muteAud = player.querySelector('#mute')
const skipper = player.querySelectorAll('[data-skip]');
const volume = player.querySelector('.player-slider');
const fullscreen = player.querySelector('#full-screen');

//function to toggle play
function togglePlay(){
    const vidState = video.paused ? 'play' : 'pause';
    video[vidState]();
}
//function to update play and pause button 
function updateButton(){
    const togglePlayBtn = document.querySelector('#play_button');

    if(this.paused){
        togglePlayBtn.innerHTML = 
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16"> <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/> </svg>';
        // '<font-awesome-icon icon="fa-regular fa-play" />';
    }
    else{
        togglePlayBtn.innerHTML = 
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16"> <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/> </svg>';
        // '<font-awesome-icon icon="fa-regular fa-pause" />';
    }
}

//stop video and set to time 0
stopVid.onclick = function(){
    video.pause();
    video.currentTime = 0;
}

//function to mute unmute and buttons
function muteUnmute(){
    const muteBtn = document.querySelector('#mute');

    muteAud.classList.toggle('muted');
    if(video.muted === true){
        video.muted = false;
        muteBtn.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"> <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/> </svg>';
    }
    else if (video.muted === false){
        video.muted = true;
        muteBtn.innerHTML = '<svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.74641 1.06494C8.90313 1.1537 9 1.31989 9 1.5V13.5C9 13.6801 8.9031 13.8463 8.74635 13.9351C8.58959 14.0239 8.39722 14.0214 8.24275 13.9287L3.36151 11H1.5C0.672066 11 0 10.329 0 9.5V5.49739C0 4.66798 0.672491 3.99804 1.5 3.99804H3.36159L8.24288 1.07118C8.39735 0.978558 8.58969 0.976173 8.74641 1.06494Z" fill="black"/> <path d="M13.8535 4.14438L13.4998 3.79094L12.793 4.49827L13.1444 4.84953L13.1466 4.85184C13.1502 4.85561 13.1571 4.86308 13.1669 4.87426C13.1864 4.89663 13.2175 4.93374 13.2564 4.98555C13.3342 5.08924 13.4428 5.2512 13.5529 5.47128C13.7723 5.90979 14.0001 6.58318 14.0001 7.49609C14.0001 8.409 13.7723 9.08238 13.5529 9.5209C13.4428 9.74097 13.3342 9.90294 13.2564 10.0066C13.2175 10.0584 13.1864 10.0955 13.1669 10.1179C13.1571 10.1291 13.1502 10.1366 13.1466 10.1403L13.1445 10.1426L12.793 10.4939L13.4998 11.2012L13.8535 10.8478L13.5001 10.4941C13.8535 10.8478 13.8533 10.848 13.8535 10.8478L13.8543 10.8471L13.8551 10.8462L13.857 10.8443L13.862 10.8392L13.876 10.8245C13.8871 10.8127 13.9017 10.7967 13.9192 10.7767C13.9543 10.7366 14.0014 10.68 14.0562 10.6069C14.1659 10.4607 14.3073 10.2479 14.4472 9.96835C14.7278 9.40751 15.0001 8.58188 15.0001 7.49609C15.0001 6.4103 14.7278 5.58467 14.4472 5.02383C14.3073 4.74423 14.1659 4.53144 14.0562 4.3853C14.0014 4.31219 13.9543 4.25561 13.9192 4.21551C13.9017 4.19546 13.8871 4.17951 13.876 4.16767L13.862 4.15296L13.857 4.1479L13.8551 4.14595L13.8543 4.14511C13.8541 4.14493 13.8535 4.14438 13.5001 4.49804L13.8535 4.14438Z" fill="black"/> </svg>';
    }
}


function progressUpdate(){
    const percent = (video.currentTime / video.duration) * 100;
    progressFill.style.flexBasis = '${percent}%';
}
function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate(e){
    //video[this.name] = this.value;
    video.volume = e.currentTarget.value /100;
    console.log(video.volume);
    console.log(e.currentTarget);
}
function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
function fullScreen(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }
    else if (video.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }
    else if (video.webkitRequestFullscreen){
        video.webkitRequestFullscreen();
    }
}
//Event Listeners for click on Video
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', progressUpdate);

//Event Listener for Play button
playPause.addEventListener('click', togglePlay);

//Event Listener for Audio
muteAud.addEventListener('click', muteUnmute);

//Event Listener for Skipping
skipper.forEach(button => button.addEventListener('click', skip));

// //Event Listener for range
// volume.forEach(range => range.addEventListener('change', rangeUpdate));
// volume.forEach(range => range.addEventListener('mousemove', rangeUpdate));
volume.addEventListener('change', rangeUpdate);
fullscreen.addEventListener('click', fullScreen);


let mousedown = false;
progress.addEventListener ('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);