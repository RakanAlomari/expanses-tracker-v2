document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const showPasswordCheckbox = document.getElementById('show-password-checkbox');
    const passwordInput = document.getElementById('password');
  
    showPasswordCheckbox.addEventListener('change', function() {
      if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const username = document.getElementById('username').value.trim();
      const password = passwordInput.value;
  
      if (name === '') {
        showMessage('Please enter your name.');
        return;
      }
  
      if (!/^\d+$/.test(phone)) {
        showMessage('Phone number should contain only numbers.');
        return;
      }
  
      if (!/\S+@\S+\.\S+/.test(email)) {
        showMessage('Please enter a valid email address.');
        return;
      }
  
      if (username === '') {
        showMessage('Please enter a username.');
        return;
      }
  
     
      
  
      form.submit();
    });
  
    function showMessage(message) {
      const errorContainer = document.getElementById('error-message-password');
      errorContainer.innerText = message;
    }
  
    function isStrongPassword(password) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
    }
  });
  
  