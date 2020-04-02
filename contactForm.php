<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "landaverry.dev@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;

    mail($mailTo, $text, $headers);

    header("Location: index.html?mailsend");
}
