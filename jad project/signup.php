<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Welcome to Covid</title>
<link rel="stylesheet" href ="/assets/css/index.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
</head>
<body>
<div class="container">
 <div class="form-control">
    <h2 class="card-title text-center">Register</h2>
     <div class="card-body py-md-4">
      <form action="signup-process.php" method="post" >
        <div class="form-gr1">
			<div class="logo-name">
              <span class="material-symbols-outlined">person</span>
              <input type="text" class="form-control" name="first_name" placeholder="First Name" required="required">
			</div>        	
            <div class="logo-name">
              <span class="material-symbols-outlined">person</span>
              <input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required">
            </div>
        </div>
        <div class="form-grp">
            <span class="material-symbols-outlined">mail</span>
        	<input type="email" class="form-control1" name="email" placeholder="Email" required="required">
        </div>
</div>
		<div class="form-grp">
            <span class="material-symbols-outlined">lock</span>
            <input type="password" class="form-control1" name="pass" placeholder="Password" required="required">
        </div>
		<div class="form-grp">
            <span class="material-symbols-outlined">lock</span>
            <input type="password" class="form-control1" name="cpass" placeholder="Confirm Password" required="required">
        </div>
		<div class="login-create-btn">
            <div class="sign-up-text"><span id="acc-txt">Have an account?</span><a1 href="login.php">Sign in</a1></div>
            <button type="submit" name="save" class="btn btn-primary">Register Now</button>
      </div>
        </div>
    </form>
     </div>
 </div>
</div>
</body>
</html>