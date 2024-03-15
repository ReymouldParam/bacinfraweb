<?php


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "bacinfratech@gmail.com";
    $subject = "General Enquiry From Bac Infratech Website";
    $message = "Name : " . $_POST["name"].
                "\nEmail : " . $_POST["email"].
                "\nPhone number : " . $_POST["mobile"].
                "\nMessage : " . $_POST["message"];

    
    if(mail($to, $subject, $message)){
        header("Location: contact?success=true");
    }else{
        header("Location: contact?success=false");
    }
    exit;
}
?>