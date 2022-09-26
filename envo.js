const hamburger = document.querySelector(".hamburger");
const navContents = document.querySelector(".items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContents.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
  })
);
