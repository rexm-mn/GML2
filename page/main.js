document.addEventListener("DOMContentLoaded", () => {
  // Simple accordion for Works page
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.closest(".accordion-item");
      const openItem = header.closest(".accordion").querySelector(".accordion-item.open");
      if (openItem && openItem !== item) {
        openItem.classList.remove("open");
      }
      item.classList.toggle("open");
    });
  });

  // Contact form placeholder handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been recorded. Please connect email sending to a backend or form service.");
      contactForm.reset();
    });
  }
});
