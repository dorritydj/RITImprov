<?php
	define("PATH_TO_USERDB","../db/Users.sqlite");
	require('../RITI_PHP_LIB.php');
	
	$loggedin = false;
	
	if (checkLogin())
		$loggedin = true;
	else
	{	
		
		if (array_key_exists('errorcode',$_GET))
		{
			switch($_GET['errorcode'])
			{
				case '1':
				$errmsg = "Incorrect Username or Password";
				break;
				default:
				$errmsg = "Please try again";
				break;
			}
		}
		else if (array_key_exists('logged_out',$_GET) && $_GET['logged_out'] == 1)
			$errmsg = 'You have been successfully logged out';
	}
	
	$userdb = openDB(PATH_TO_USERDB);
	
?><!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php if ($loggedin): ?>
	<h1>You are already logged in</h1>
	<p>Did you mean to <a href='logout.php'>logout</a>?</p>
	<p>Or go to the <a href='index.php'>admin page</a>?</p>
	<?php elseif(!$loggedin):?>
	<h1>Log In Please</h1>
	<strong style='color:red;'><?php if (isset($errmsg)) echo $errmsg;?></strong>
	<form action='index.php' method='post'>
	<input type='hidden' name='attempt'>
	<div>Username: <input type='text' name='user'></div>
	<div>Password: <input type='password' name='pass'></div>
	
	<input type='submit' value='Log In'>
	<?php endif;?>
</body>
</html>