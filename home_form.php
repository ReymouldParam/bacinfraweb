<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "revanthdanduboina@gmail.com";
    $subject = "General Enquiry From Bac Infratech Website";
    $message = "Name : " . $_POST["name"].
                "\nEmail : " . $_POST["email"].
                "\nMessage : " . $_POST["message"];

    if(mail($to, $subject, $message)){
        header("Location: .?success=true");
    }else{
        header("Location: .?success=false");
    }
    exit;
}
?>