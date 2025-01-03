const sendEmail = (event) => {
  event.preventDefault();

  // Clear previous error messages
  document.querySelectorAll("small").forEach((small) => (small.textContent = ""));

  // Select form fields
  const nameField = document.querySelector('input[placeholder="Name"]');
  const emailField = document.querySelector('input[placeholder="Email"]');
  const phoneField = document.querySelector('input[placeholder="Phone Number"]');
  const messageField = document.querySelector('textarea[placeholder="Message"]');

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const phone = phoneField.value.trim();
  let message = messageField.value.trim();

  let isValid = true;

  // Validate name
  if (!name) {
    isValid = false;
    nameField.nextElementSibling.textContent = "Name is required.";
  }

  // Validate phone or email (one must be filled)
  if (!phone && !email) {
    isValid = false;
    emailField.nextElementSibling.textContent = "Either email or phone is required.";
    phoneField.nextElementSibling.textContent = "Either phone or email is required.";
  } else {
    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      emailField.nextElementSibling.textContent = "Invalid email format.";
    }

    // Validate phone if provided
    if (phone && !/^\d+$/.test(phone)) {
      isValid = false;
      phoneField.nextElementSibling.textContent = "Phone number must contain only digits.";
    }
  }

  // Validate message
  if (!message) {
    isValid = false;
    messageField.nextElementSibling.textContent = "Message is required.";
  }

  // Stop submission if validation fails
  if (!isValid) return;

  // Embed name, email, and phone into the message
  let additionalInfo = `\n\n--- Contact Information ---\n`;
  additionalInfo += `Name: ${name}\n`;
  if (email) {
    additionalInfo += `Email: ${email}\n`;
  }
  if (phone) {
    additionalInfo += `Phone: ${phone}\n`;
  }
  message += additionalInfo;

  // Send the email using EmailJS
  emailjs
    .send("default_service", "template_19jjgwt", {
      to_name: "Gaurav",
      from_name: name,
      message: message, // Updated message
    })
    .then(
      () => {
        nameField.value = "";
        emailField.value = "";
        phoneField.value = "";
        messageField.value = "";
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send the message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
};

document.getElementById("button").addEventListener("click", sendEmail);
