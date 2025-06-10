const toggleBtn = document.querySelector(".theme-toggle");
const icon = toggleBtn.querySelector("i");
const body = document.body;

var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "SQL Developer",
    "Java Developer",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const image = document.getElementById("image3d");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5; // -0.5 to 0.5
  const y = e.clientY / window.innerHeight - 0.5;

  const rotateX = y * 20; // max 20deg tilt
  const rotateY = x * 20;

  image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});
// Toggle navbar on small screens
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
});

// Toggle light/dark theme
document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
