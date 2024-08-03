<?php

$con = mysqli_connect("localhost","root","","inr_contact");

if ($con) {
   echo "Connection Successful :)";
} else {
   echo "Connection Failled :(";
}

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$sql = "INSERT INTO `contact_us`(`name`, `email`, `number`, `message`) VALUES ('$name','$email','$number','$message')";

$result = mysqli_query($con, $sql);

?>