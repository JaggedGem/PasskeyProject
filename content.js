// Content script

// Check if the user visits a site where the passkey is saved
// Auto-fill login fields using the passkey
// Code for auto-filling login fields goes here










// contentScript.js

// Listen for form submissions
document.addEventListener('submit', function(event) {
    const form = event.target;
  
    // Check if the submitted form contains username and password fields
    const usernameField = form.querySelector('input[type="text"]');
    const passwordField = form.querySelector('input[type="password"]');
  
    if (usernameField && passwordField) {
      const username = usernameField.value;
      const password = passwordField.value;
  
      // Communicate the username and password to the background script
      chrome.runtime.sendMessage({ username: username, password: password });
    }
  });
  