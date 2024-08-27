document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        document.getElementById('form-status').textContent = 'All fields are required.';
        document.getElementById('form-status').style.color = 'red';
        return;
    }
    
    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('form-status').textContent = 'Please enter a valid email address.';
        document.getElementById('form-status').style.color = 'red';
        return;
    }
    
    document.getElementById('form-status').textContent = 'Your message has been sent!';
    document.getElementById('form-status').style.color = 'green';
    
    // Here you would typically handle form submission, e.g., send data to a server.
});
