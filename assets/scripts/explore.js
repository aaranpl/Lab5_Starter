// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector('#voice-select');
  const textarea = document.querySelector('#text-to-speak');
  const button = document.querySelector('button');
  const img = document.querySelector('#explore img');

  const smilingImg = 'assets/images/smiling.png';
  const openMouthImg = 'assets/images/open-mouth.png';

  const synth = window.speechSynthesis;

  // Populate voices - may fire async
  function loadVoices() {
    const voices = synth.getVoices();
    // Clear existing options except the default placeholder
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  // Chrome loads voices async
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  // Press to Talk button
  button.addEventListener('click', () => {
    if (synth.speaking) {
      synth.cancel();
    }

    const text = textarea.value;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedIndex = voiceSelect.value;
    if (selectedIndex !== 'select') {
      utterance.voice = synth.getVoices()[selectedIndex];
    }

    // Swap to open mouth while speaking
    utterance.onstart = () => {
      img.src = openMouthImg;
    };

    utterance.onend = () => {
      img.src = smilingImg;
    };

    utterance.onerror = () => {
      img.src = smilingImg;
    };

    synth.speak(utterance);
  });
}