<?php
extract($_POST);
include("database.php");
$sql=mysqli_query($conn,"SELECT * FROM users where email='$email'");
if(mysqli_num_rows($sql)>0)
{
    echo "Email Id Already Exists"; 
	exit;
}
$uppercase = preg_match('@[A-Z]@', ($pass)); 
$lowercase = preg_match('@[a-z]@', ($pass));
$number    = preg_match('@[0-9]@', ($pass));

if(!$uppercase || !$lowercase || !$number || strlen(($pass)) < 8) {
    echo 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
}else{
    echo 'Strong password.';
    $pass = md5($_POST['password']);
    $query="INSERT INTO users(first, last, email, Password ) VALUES ('$first_name', '$last_name', '$email', '($pass)')";
    $sql=mysqli_query($conn,$query)or die("Could Not Perform the Query");
    header ("Location: login.php?status=success");
}



?>