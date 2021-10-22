// explore.js
window.addEventListener('DOMContentLoaded', init);
let currentText = ''; 
function init() {
  let synth = window.speechSynthesis;
  let voices = null; 
  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices(); 
    let s = document.getElementById('voice-select'); 
    for (let i = 0; i < voices.length; i++) {
      let obj = document.createElement('option'); 
      obj.value = voices[i].name; 
      obj.setAttribute('label', voices[i].name)
      s.appendChild(obj); 
    }
    let textBox = document.getElementById('text-to-speak');
    textBox.addEventListener('input', () => {
      currentText = textBox.value; 
    }); 

    let playButton = document.querySelector('button'); 
    playButton.addEventListener('click', () => {
      let utterCurrent = new SpeechSynthesisUtterance(currentText); 
      let currentVoice = document.getElementById('voice-select'); 
      currentVoice = currentVoice.options[currentVoice.selectedIndex].value; 
      for (let j = 0; j < voices.length; j++) {
        if (voices[j].name == currentVoice) {
          utterCurrent.voice = voices[j]; 
          break; 
        }
      }
      synth.speak(utterCurrent); 
      let currentImage = document.querySelector('img'); 
      currentImage.src = 'assets/images/smiling-open.png'; 
      utterCurrent.onend = () => {
        currentImage.src = 'assets/images/smiling.png'; 
      }; 
    }); 
  }); 
}
