document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(
      "Thank you for your message! We will get back to you as soon as possible."
    );
    this.reset(); // Ryd formularen efter indsendelse
  });
