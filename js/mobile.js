const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    console.log("clicked");
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
