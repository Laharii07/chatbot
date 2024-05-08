<?php
// Simple bot logic
if(isset($_POST['userInput'])){
    $userInput = $_POST['userInput'];
    $botResponse = "";

    // Debugging: Print received user input
    var_dump($userInput);

    if (strpos(strtolower($userInput), 'hello') !== false) {
        $botResponse = "Hello! How can I assist you today?";
    } elseif (strpos(strtolower($userInput), 'order') !== false) {
        $botResponse = "Sure! Please provide details of your order.";
    } else {
        $botResponse = "I'm sorry, I couldn't understand that. How can I assist you?";
    }

    // Debugging: Print generated bot response
    var_dump($botResponse);

    echo $botResponse;
} else {
    echo "No user input received.";
}
?>
