const typingText = document.getElementById("typing");

const commands = [
  "./start-portfolio",
  "whoami",
  "ls projects",
  "skills --proof",
  "contact"
];

let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentCommand = commands[commandIndex];

  if (isDeleting) {
    typingText.textContent = currentCommand.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentCommand.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentCommand.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    commandIndex = (commandIndex + 1) % commands.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
