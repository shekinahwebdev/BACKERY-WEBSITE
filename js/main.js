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
      errorMessage.style.display = "flex";
    } else {
      emailInput.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  });
});
