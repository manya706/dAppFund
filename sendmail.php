<!-- process-form.php -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Email information
    $to = "pandeyanuj1804@gmail.com";
    $subject = "New Form Submission";
    $headers = "From: $email";

    // Compose email message
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
