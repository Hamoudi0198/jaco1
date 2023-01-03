<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Welcome to Covid</title>
    <link rel="stylesheet" href ="/assets/css/index.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body>
    <div class="container">
        <div class="form-control">
          <h2 class="card-title text-center">Login</h2>
          <div class="card-body py-md-4">
            <form action="loginProcess.php" method="post">
             <div class="form-grp">
               <span class="material-symbols-outlined">mail</span>
               <input type="email" class="form-control1" name="email" placeholder="Email" required="required">
                </div>
                <div class="form-grp">
                    <span class="material-symbols-outlined">lock</span>
                    <input type="password" class="form-control1" name="pass" placeholder="Password" required="required">
                </div>
                </div>

                <div class="login-create-btn">
                <div class="sign-up-text">
                    <p>Don't have an account?</p><a href="register.php" id="a1">Sign up Here</a>
                </div>
                    <button type="submit" name="login" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        </div>
</body>
</html>