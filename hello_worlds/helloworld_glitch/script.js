const glitchText = document
 .getElementById('glitchText');

function applyGlitch() {
 const text = glitchText.textContent;
 let newText = '';

 for (let i = 0; i < text
  .length; i++) {
  if (Math.random() > 0.8) {
   newText += String.fromCharCode(33 +
    Math.floor(Math.random() * 94));
  } else {
   newText += text[i];
  }
 }

 glitchText.textContent = newText;

 setTimeout(() => {
  glitchText.textContent = text;
 }, 100);
}

setInterval(applyGlitch, 500);