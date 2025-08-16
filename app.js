const input = document.querySelector('.input');
const submitBtn = document.querySelector('.btn');
const card = document.querySelector('.card');
const main = document.querySelector('main');
const bgm = document.getElementById('bgm');

const specialMessages = [
  "I know you're a bit upset 😔, but I ❤️ you so much!",
  "Every moment without your smile feels incomplete 😊",
  "Tu jevha hassa, te world perfect 😘",
  "Sending you a virtual hug 🤗 with all my love!",
  "Remember, no one can ever replace you 💕"
];

// Create burst hearts
function createBurstHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('burst-heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    main.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

// Continuous floating hearts
function floatingHearts() {
  const heart = document.createElement('div');
  heart.classList.add('burst-heart');
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  main.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(floatingHearts, 500);

// Confetti effect
function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
    main.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Show temporary message
function showMessage(text, type) {
  const msg = document.createElement('div');
  msg.classList.add('special-message');
  msg.textContent = text;
  if (type === 'wrong') msg.style.color = '#ff1744';
  main.appendChild(msg);
  setTimeout(() => msg.remove(), 4000);
}

// Submit button click
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '27') {
    card.classList.add('glow');
    createBurstHearts();
    showMessage("Correct! You remembered ❤️", 'correct');
    createConfetti();

    // Unlock section
    if (!document.getElementById('unlock-section')) {
      const unlockSection = document.createElement('section');
      unlockSection.id = 'unlock-section';
      unlockSection.classList.add('card');
      unlockSection.style.marginTop = '20px';
      unlockSection.innerHTML = `
        <h2>🎉 Surprise! 🎉</h2>
        <p>Tu mla insta vr ajun unblock nhi kel 😏</p>
        <button id="unlock-btn" class="btn">Unblock Here</button>
      `;
      main.appendChild(unlockSection);

      const unlockBtn = document.getElementById('unlock-btn');
      unlockBtn.addEventListener('click', () => {
        window.open('https://www.instagram.com/_rupesh___0007/', '_blank');
      });
    }

    // Add multiple special messages with hearts
    specialMessages.forEach((msg, index) => {
      setTimeout(() => {
        const msgSection = document.createElement('section');
        msgSection.classList.add('card');
        msgSection.style.marginTop = '15px';
        msgSection.innerHTML = `<p>${msg} ❤️</p>`;
        main.appendChild(msgSection);
        createBurstHearts();
      }, (index + 1) * 2000);
    });

  } else {
    showMessage("Aww, you forgot... but I still love you 💕", 'wrong');
  }
});

// Optional: Mute/unmute button for bgm
const muteBtn = document.createElement('button');
muteBtn.id = 'mute-btn';
muteBtn.textContent = '🔊 Mute';
muteBtn.classList.add('btn');
muteBtn.style.position = 'fixed';
muteBtn.style.top = '10px';
muteBtn.style.right = '10px';
document.body.appendChild(muteBtn);

muteBtn.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    muteBtn.textContent = '🔊 Mute';
  } else {
    bgm.pause();
    muteBtn.textContent = '🔈 Play';
  }
});
