async function playRandomAudio() {
  const audio = new Audio(); 
  try {
    const response = await fetch('playlist.json');
    const filePaths = await response.json();
    const randomIndex = Math.floor(Math.random() * filePaths.length);
    const randomFilePath = filePaths[randomIndex];
    alert(`Playing: ${randomFilePath}`);
    audio.src = randomFilePath;
    await audio.play(); 
  } catch (error) {
    console.error('Error loading or playing the audio file:', error);
  }
}
document.getElementById('play-audio-btn').addEventListener('click', playRandomAudio);
