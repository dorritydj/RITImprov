<?php

// DB TABLE VARS

define('NEWS_TABLE', 'news');
define('ADMIN_TABLE', 'auth_admin');

// MYSQL VARS

define('MYSQL_HOST', 'localhost:3306');
define('MYSQL_USERNAME', 'root');
define('MYSQL_PASSWORD', '');
define('MYSQL_DB', 'riti');

function getConnection(){

	$link = @mysql_connect(MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD);
	if(!$link){
		throw new Exception('Could not connect to mysql ' . mysql_error() . PHP_EOL . 
				'. Please check connection parameters in app/bootstrap.php');
	}
	if(!mysql_select_db(MYSQL_DB, $link)) {
		throw new Exception('Could not select database ' . mysql_error() . PHP_EOL . 
				'. Please check connection parameters in app/bootstrap.php');
	}

	return $link;
}

?>