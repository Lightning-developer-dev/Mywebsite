document.addEventListener('DOMContentLoaded', () => {
    displayChat();
    updateCounter(); // Initialize the character counter
    loadTheme(); // Load the saved theme
    checkDownloads(); // Check for download links
  });
  
  function sendFeedback() {
    const chatInput = document.getElementById('chat-input').value;
    if (chatInput) {
      let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
      chatHistory.push(chatInput);
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
      displayChat();
      document.getElementById('chat-input').value = ''; // Clear the input
      updateCounter(); // Reset the counter
    }
  }
  
  function displayChat() {
    const chatBox = document.getElementById('chat-box');
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatBox.innerHTML = chatHistory.map(msg => `<p>${msg}</p>`).join('');
  }
  
  function showPasswordPopup() {
    document.getElementById('password-popup').style.display = 'block';
  }
  
  function hidePasswordPopup() {
    document.getElementById('password-popup').style.display = 'none';
  }
  
  function checkPassword() {
    const correctPassword = 'SuperSecretPassWord'; // Set your desired password
    const password = document.getElementById('password-input').value;
  
    if (password === correctPassword) {
      hidePasswordPopup();
      clearChat();
    } else {
      alert('Incorrect password. Please try again.');
    }
  }
  
  function clearChat() {
    localStorage.removeItem('chatHistory');
    displayChat();
    updateCounter(); // Reset the counter
  }
  
  function updateCounter() {
    const chatInput = document.getElementById('chat-input');
    const charCounter = document.getElementById('char-counter');
    const remaining = 250 - chatInput.value.length;
    charCounter.textContent = `${remaining} characters left`;
  }
  
  function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }
  
  function loadTheme() {
    const theme = localStorage.getItem('theme') || 'default';
    document.body.className = theme;
  }
  
  function checkDownloads() {
    const downloadLinks = document.querySelectorAll('.downloads a');
    let allLinksValid = true;
  
    downloadLinks.forEach(link => {
      if (!link.getAttribute('href') || link.getAttribute('href') === 'path-to-your-file1' || link.getAttribute('href') === 'path-to-your-file2' || link.getAttribute('href') === 'path-to-your-file3') {
        allLinksValid = false;
      }
    });
  
    if (!allLinksValid) {
      const noDownloadsMessage = document.createElement('div');
      noDownloadsMessage.className = 'no-downloads';
      noDownloadsMessage.innerText = 'No downloads found';
      document.querySelector('.downloads').appendChild(noDownloadsMessage);
    }
  }
  