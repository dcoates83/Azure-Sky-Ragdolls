import { navToggle } from "./toggle.js";
import { faqQuestion } from "./faq.js";

function resize(params) {
  const navItems = document.querySelector(".nav-items");
  if (window.innerWidth > 790) {
    navItems.classList.remove("show-links");
  }
}
navToggle();
faqQuestion();
window.addEventListener("resize", resize);
