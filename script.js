const effects = document.getElementById("effects");

// Stars & party poppers falling from top
setInterval(() => {
  const elem = document.createElement("div");
  elem.classList.add("effect");
  elem.innerText = Math.random() > 0.5 ? "⭐" : "🎉";
  elem.style.left = Math.random() * window.innerWidth + "px";
  elem.style.animationDuration = (3 + Math.random() * 3) + "s";

  effects.appendChild(elem);

  setTimeout(() => elem.remove(), 6000);
}, 200);

// Hearts floating from bottom to top
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";

  effects.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);
