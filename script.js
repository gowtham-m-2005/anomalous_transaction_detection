function showLogin() {
    const loginSection = document.querySelector('.admin-login');
    loginSection.style.display = 'block';
  }
  
  function adminLogin() {
    // Perform admin login functionality here
    const loginForm = document.getElementById('admin-login-form');
    // Implement admin login logic, display welcome section on successful login
    loginForm.reset(); // Reset form fields
    document.querySelector('.admin-login').style.display = 'none'; // Hide login section
    document.querySelector('.welcome-section').style.display = 'block'; // Show welcome section
    return false; // Prevent form submission
  }
  
  function displayUserAccount() {
    const userDropdown = document.getElementById('user-dropdown');
    const selectedUser = userDropdown.options[userDropdown.selectedIndex].text;
  
    // Fetch user account details and transaction history based on the selected user
    // Display the details in the user-details section
    const userDetails = document.querySelector('.account-details');
    userDetails.style.display = 'block'; // Show user account details
    // Implement code to display user's account details and transaction history here
  }
  
  function checkAnomalies() {
    // Check anomalies in the user's account
    // Display anomalies found or not found
    const anomaliesButton = document.createElement('button');
    anomaliesButton.textContent = 'Anomalies Found';
    anomaliesButton.onclick = function() {
      sendWarningEmail();
    };
    document.querySelector('.account-details').appendChild(anomaliesButton);
  }
  
  function sendWarningEmail() {
    // Simulating sending a warning email
    // Display confirmation popup for blocking account after email sent
    if (confirm('Warning email sent. Do you want to block the account?')) {
      // Implement code to block the account
      alert('Account blocked successfully!');
    } else {
      alert('Account not blocked.');
    }
  }
  