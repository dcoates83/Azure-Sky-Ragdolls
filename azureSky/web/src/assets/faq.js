function faqQuestion(params) {
  const btns = document.querySelectorAll(".btn-plus");
  const questions = document.querySelectorAll(".question");
  // Loop through all questions
  questions.forEach((question) => {
    const answer = question.querySelector(".faq-desc");
    const btn = question.querySelector(".btn-plus");
    // Listen for click on each button
    btn.addEventListener("click", function () {
      const header = question.querySelector(".faq-q");
      let answer = question.querySelector(".faq-desc");
      //  loop through that selected button and find class in it
      // Check to see if it matches
      questions.forEach((item) => {
        if (item !== question) {
          const answer = item.querySelector(".faq-desc");
          item.classList.remove("show-text", "darken-text");
          answer.style.maxHeight = "0";
        }
      });
      // If not add classes and styles to that seleceted question
      header.classList.toggle("darken-text");
      question.classList.toggle("show-text");
      // height of the answer
      let height = answer.scrollHeight;
      // set the answers height for smooth scroll effect
      //// answer.style.maxHeight = `${height}px`;
      // allows the user to close the answer if same button is reselected
      let contains = question.classList.contains("show-text");
      if (contains) {
        answer.style.maxHeight = `${height}px`;
      } else {
        answer.style.maxHeight = `0`;
      }
    });
  });
}

export { faqQuestion };
