<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    $recipient = "son1kx@vk.com";

    $subject = "New message from $name";
    $email_body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";

    if (mail($recipient, $subject, $email_body)) {
        echo "<p>Your message has been sent.</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
}
?>
