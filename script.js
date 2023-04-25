function validateEmail() {
  // Get the email input field and its value
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Check if the email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Extract the domain name from the email
  const domain = email.split("@")[1];

  // Check if the domain is allowed
  const allowedDomains = ["resmed.com", "gmail.com"];
  if (!allowedDomains.includes(domain)) {
    alert("Only email addresses from resmed.com and gmail.com are allowed.");
    return false;
  }

  // Allow the form submission
  return true;
}
