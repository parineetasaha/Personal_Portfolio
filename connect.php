<?php
// connect.php
$name  = $_POST['name'];
$email  = $_POST['email'];
$message  = $_POST['message'];
    
$conn = new mysqli('localhost','root','','personal_portfolio');
if($conn->connect_error){
    die('Connection Failed:'.$conn->connect_error)
}
else{
    $stmlt = $conn->prepare("insert into registration(name, email, message)
    values(?,?,?)");
    $stmlt->bind_param("sss",$name,$email,$message);
    $stmlt->execute();
    echo "registration sucessfully";
    $stmlt->close();
    $conn->close();
}
?>