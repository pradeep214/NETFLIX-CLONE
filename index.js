const faqs = document.querySelectorAll(".faqbox");

faqs.forEach((faqbox) => {
  faqbox.addEventListener("click", () => {
    if (faqbox.classList.toggle("active")) {
        faqbox.classList.add("active");
    } else {
      
      faqbox.classList.remove("active");
    }
  });
});
