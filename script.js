function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Append user input to chat box
    appendMessage(userInput, 'user');
    document.getElementById("user-input").value = "";

    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Define POST request to bot.php
    xhr.open("POST", "bot.php", true);
    
    // Set request header
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    // Define callback function when response is received
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Process response
            var response = xhr.responseText;
            
            // Append bot response to chat box
            appendMessage(response, 'bot');
        }
    }
    
    // Send user input to bot.php
    xhr.send("userInput=" + userInput);
}

function appendMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");
    var messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.innerHTML = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
