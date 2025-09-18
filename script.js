document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageBox = document.getElementById('message');
    if (name && email) {
        messageBox.textContent = `Thank you, ${name}! We'll contact you at ${email}.`;
        messageBox.style.color = 'green';
        this.reset();
    } else {
        messageBox.textContent = 'Please fill in all fields.';
        messageBox.style.color = 'red';
    }
});