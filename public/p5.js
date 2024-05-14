document.addEventListener('DOMContentLoaded', function() {
    const showPasswordToggle = document.getElementById('show-password');
    const passwordInput = document.getElementById('password');

    showPasswordToggle.addEventListener('change', function() {
        if (showPasswordToggle.checked) {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });

    document.getElementById('logins').addEventListener('click', function(event) {
        event.preventDefault();

        var password = passwordInput.value;
        var username = document.getElementById('username').value;

        if (!username.trim() || !password.trim()) {
            document.getElementById('error-message').innerText = 'Please enter both username and password.';
            return;
        }

      
        window.location.href = 'p3.html';
    });

   

    document.getElementById('Create').addEventListener('click', function() {
        window.location.href = 'p7.html';
    });

    document.getElementById('Individuals').addEventListener('click', function() {
        window.location.href = 'p1.html';
    });
});
