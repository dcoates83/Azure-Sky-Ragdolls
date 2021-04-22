function navToggle(params) {
  const navItems = document.querySelector(".nav-items");
  const navContainer = document.querySelector(".nav-container");
  const navToggle = document.querySelector(".toggle");
  // Toggle Nav
  navToggle.addEventListener("click", function (e) {
    navItems.classList.toggle("show-links");
    const linksHeight = navItems.getBoundingClientRect().height;
    const navHeight = navContainer.getBoundingClientRect().height;
    if (navHeight < linksHeight) {
      navContainer.style.height = `${linksHeight}px`;
    } else {
      navContainer.style.height = `${navHeight}px`;
    }
  });
}
export { navToggle };
