// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamberger menu diklik
document.querySelector("#hamberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
