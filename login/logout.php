<?php
	define("PATH_TO_USERDB","../db/Users.sqlite");
	require('../RITI_PHP_LIB.php');
	
	session_start();
	
	if (isset($_SESSION['user']))
		unset($_SESSION['user']);
	if (isset($_SESSION['logged_in']))
		unset($_SESSION['logged_in']);
		
	session_destroy();
	
	header("Location: login.php?logged_out=1");
?>