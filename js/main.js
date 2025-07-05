document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const emailInput = document.querySelector(".email_input");
  const errorMessage = document.querySelector(".error");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.from_email.value;

    if (!isValidEmail(email)) {
      emailInput.classList.add("invalid");
      errorMessage.classList.add("show");
    } else {
      emailInput.classList.remove("invalid");
      errorMessage.classList.remove("show");
    }

    emailjs
      .send("service_yp7qdcq", "template_4v1i86q", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.reset();
          setTimeout(() => {
            window.location.reload();
          }, 100);
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  });
});
