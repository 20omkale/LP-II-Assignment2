document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a user object
    const user = {
        name: name,
        email: email,
        password: password
    };

    // Get existing users from localStorage, or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    users.push(user);

    // Store updated users in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to data.html to show the list of users
    window.location.href = 'data.html';
});
