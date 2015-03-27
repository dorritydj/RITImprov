<?php

// Entity tables
define('SIGNUP_2015_TABLE', 'signup_2015');

function getConnection(){

	$link = @mysql_connect(MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD);
	if(!$link) {
		throw new Exception('Could not connect to mysql ' . mysql_error() . PHP_EOL . 
				'. Please check connection parameters in app/bootstrap.php');
	}
	if(!mysql_select_db(MYSQL_DB, $link)) {
		throw new Exception('Could not select database ' . mysql_error() . PHP_EOL . 
				'. Please check connection parameters in app/bootstrap.php');
	}
	
	return $link;
}