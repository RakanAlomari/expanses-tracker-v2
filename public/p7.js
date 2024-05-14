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
  
      const institutionName = document.getElementById('institution name').value.trim();
      const institutionId = document.getElementById('institution id').value.trim();
      const password = passwordInput.value;
  
      if (institutionName === '') {
        showMessage('Please enter the institution name.');
        return;
      }
      if (institutionId === '') {
        showMessage('Please enter a the institution id.');
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
  
  