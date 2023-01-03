<?php
session_start();
if(isset($_POST['login']))
{
    extract($_POST);
    include 'database.php';
    $sql=mysqli_query($conn,"SELECT * FROM users where Email='$email' and Password='md5($pass)'");
    $row  = mysqli_fetch_array($sql);
    if(is_array($row))
    {
        $_SESSION["id"] = $row['id'];
        $_SESSION["email"]=$row['email'];
        $_SESSION["first"]=$row['first'];
        $_SESSION["last"]=$row['last']; 
        header("Location: index.html"); 
    }
    else
    {
        echo "Invalid Email ID/Password";
    }
}
?>