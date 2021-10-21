// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti(); 
function init() {
  let hornSelector = document.getElementById('horn-select');
  hornSelector.addEventListener('change', changeHorn); 
  let volumeDragger = document.getElementById('volume');  
  volumeDragger.addEventListener('input', changeVolume);
  let playButton = document.querySelector('button');
  playButton.addEventListener('click', playSound); 
} 

function changeHorn() {
  let currentImage = document.querySelector('img'); 
  let currentSound = document.querySelector('audio');

  let newImageString = 'assets/images/' + this.options[this.selectedIndex].value + '.svg'; 
  let newSoundString = 'assets/audio/' + this.options[this.selectedIndex].value + '.mp3'; 
  currentImage.setAttribute('src', newImageString);
  currentSound.setAttribute('src', newSoundString);
}

function changeVolume() {
  let soundImage = document.getElementById('volume-controls').getElementsByTagName('IMG'); 
  let sound = document.querySelector('audio');
  soundImage = soundImage[0]; 
  let currentVolume = this.value;
  sound.volume = currentVolume / 100; 
  if (currentVolume == 0) {
    soundImage.setAttribute('src', 'assets/icons/volume-level-0.svg'); 
  } else if (currentVolume >= 1 && currentVolume < 33) {
    soundImage.setAttribute('src', 'assets/icons/volume-level-1.svg'); 
  } else if (currentVolume >= 33 && currentVolume < 67) {
    soundImage.setAttribute('src', 'assets/icons/volume-level-2.svg'); 
  } else {
    soundImage.setAttribute('src', 'assets/icons/volume-level-3.svg'); 
  }
}
 
function playSound() {
  let sound = document.querySelector('audio');
  if (sound.getAttribute('src') == 'assets/audio/party-horn.mp3') {
    jsConfetti.addConfetti(); 
    sound.play(); 
  } else {
    sound.play(); 
  }
}