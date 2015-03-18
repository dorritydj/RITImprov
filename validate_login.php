<?php

	require_once('db.php');

	if($_SERVER['REQUEST_METHOD'] == "GET"){

		session_start();

		$username = $password = '';

		$username = $_GET['user'];
		$password = $_GET['pass'];
		//bigb00ty2014

		$passEncrypt = encrypt($password);
		
		$conn = getConnection();
		$query = sprintf("SELECT * FROM %s WHERE username='%s' AND password='%s'",
			ADMIN_TABLE,
			mysql_real_escape_string($username),
			$passEncrypt);

		$result = mysql_query($query, $conn);
		if(mysql_fetch_assoc($result) != ''){
			$_SESSION['RITI']['admin_logged_in'] = true;
			echo 'true';
		} else {
			echo 'false';
		}
	}
	// logging out
	else if($_SERVER['REQUEST_METHOD'] == "POST"){

		session_start();
		unset($_SESSION['RITI']['admin_logged_in']);

		echo 'true';
	}

	function encrypt($pass){
		$newPass = '';
		for($i = 0; $i < strlen($pass); $i++){
			$newPass .= chr((ord($pass[$i])*13) % 48 + 48);
		}

		return $newPass;
	}

?>