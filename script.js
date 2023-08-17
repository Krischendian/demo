// Get form elements and associated fields
const form = document.querySelector("form");
const optionRadio = document.querySelectorAll('input[name="option"]');
const hourlyRateContainer = document.getElementById("hourlyRateContainer");
const hourlyRateInput = document.getElementById("hourlyRate");

// Add event listeners for options
optionRadio.forEach(radio => {
  radio.addEventListener("change", function () {
    if (this.value === "Hire") {
      hourlyRateContainer.style.display = "block";
      hourlyRateInput.setAttribute("required", true);
    } else {
      hourlyRateContainer.style.display = "none";
      hourlyRateInput.removeAttribute("required");
    }
  });
});

// Validation on form submission
form.addEventListener("submit", function (event) {
  const postalCodeInput = document.getElementById("postalCode");
  const postalCodePattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;

  if (!postalCodePattern.test(postalCodeInput.value)) {
    alert("Please enter a valid Canadian postal code (e.g. A1A 1A1).");
    event.preventDefault();
    return;
  }

 // Check if other required fields are empty
  const requiredInputs = form.querySelectorAll("[required]");
  for (let i = 0; i < requiredInputs.length; i++) {
    const input = requiredInputs[i];
    if (input.value.trim() === "") {
      alert("Please fill in all required fields.");
      event.preventDefault();
      return;
    }
  }
});
