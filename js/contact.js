document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow validation

    // Clear previous error messages
    let errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function(msg) {
        msg.remove();
    });

    let formValid = true;

    // Name validation
    let name = document.getElementById('name');
    if (name.value.trim() === "") {
        formValid = false;
        showError(name, 'Name is required');
    }

    // Email validation
    let email = document.getElementById('email');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "" || !emailPattern.test(email.value)) {
        formValid = false;
        showError(email, 'Valid email is required');
    }

    // Subject validation
    let subject = document.getElementById('subject');
    if (subject.value.trim() === "") {
        formValid = false;
        showError(subject, 'Subject is required');
    }

    // Message validation
    let message = document.getElementById('message');
    if (message.value.trim() === "") {
        formValid = false;
        showError(message, 'Message is required');
    }

    // If form is valid, you can proceed with further actions (like sending the form data)
    if (formValid) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }
});

// Function to show error messages below fields
function showError(inputElement, message) {
    let errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = message;
    inputElement.parentElement.appendChild(errorMessage);
}

