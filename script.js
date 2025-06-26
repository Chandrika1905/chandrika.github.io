const text = "Hi, I'm Chandrika Gudditi";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

function toggleMode() {
  document.body.classList.toggle("light-mode");
}

window.onload = typeWriter;
