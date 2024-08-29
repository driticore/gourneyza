"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", function (event) { 
    // Preventing page reload on submit
    event.preventDefault(); 

    // Selecting the email value filled by the user
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone-number").value;

    // Checking for valid email using a simple regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (!emailPattern.test(email)) {
      alert("Wrong email format");
      return;
    }
    if (!phonePattern.test(phone)) {
        alert("Wrong phone format")
    }

    // If everything passes, show success message
    alert("Form submitted successfully");
});