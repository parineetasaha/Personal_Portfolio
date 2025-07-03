<?php
$conn=new mysqli("localhost","root","","personal_portfolio");
if($conn->connect_error){
    die("Connection Error".$conn->connect_error);
}
else{
   $name  = $_POST['name'];
   $email  = $_POST['email'];
   $message  = $_POST['message'];
   $query="INSERT INTO info(`name`,`email`,`message`)VALUES('$name','$email','$message')";
   $connect=$conn->query($query);
   if($connect){
   header("Location: index.html?success=1");

   }
   else{
   header("Location: index.html?success=0");
   }
   $conn->close();

}
