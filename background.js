// backgroundScript.js

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.username && message.password) {
      const username = message.username;
      const password = message.password;
  
      // Now you have access to the username and password from the login form
      // Handle this data securely or as required for your extension's functionality
      console.log('Username:', username);
      console.log('Password:', password);
  
      // Note: Storing passwords directly is not recommended due to security risks.
      // It's essential to handle this data securely and responsibly.
    }
  });
  