const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const particlesArray = [];

// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });

// const mouse = {
//   x: undefined,
//   y: undefined,
// };

// canvas.addEventListener("mousemove", function (e) {
//   mouse.x = e.offsetX;
//   mouse.y = e.offsetY;
//   // draw();
// });

// class Particle {
//   constructor() {
//     this.x = Math.random() * canvas.width;
//     this.y = Math.random() * canvas.height;
//     this.size = Math.random() * 5 + 1;
//     this.speedX = Math.random() * 3 - 1.5;
//     this.speedY = Math.random() * 3 - 1.5;
//   }
//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }
//   draw() {
//     ctx.fillStyle = "blue";
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//     ctx.fill();
//   }
// }

// function init() {
//   for (let i = 0; i < 100; i++) {
//     particlesArray.push(new Particle());
//   }
// }
// init();

// function handleParticles() {
//   for (let i = 0; i < particlesArray; i++) {
//     particlesArray[i].update();
//     particlesArray[i].draw();
//   }
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   handleParticles();
//   requestAnimationFrame(animate);
// }
// animate();
