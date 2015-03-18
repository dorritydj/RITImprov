<?php
	define("PATH_TO_DB","../db/eventsTable.sqlite");
	define("PATH_TO_USERDB","../db/Users.sqlite");
	
	require('../RITI_PHP_LIB.php');
	
	$db = openDB(PATH_TO_DB);
	$userdb = openDB(PATH_TO_USERDB);
	
	if (!checkLogin($userdb))
	{
		if (array_key_exists('attempt',$_POST))
			header("Location: login.php?errorcode=1");
		else
			header("Location: login.php");
			
		die();
	}
	
	$user = $_SESSION['username'];
	
	if (array_key_exists('added_event',$_POST))
	{
		$status = addEvent($db, $user);
	}
	else if (array_key_exists('delete_event_submit',$_POST))
	{
		$status = deleteEvent($db,$user);
	}

?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Edit the events</title>
</head>
<body>
<a href='logout.php' style='float:right;font-size:20px;'>Logout</a>
<h1>Welcome, <?php echo $user;?></h1>
<?php if (isset($status)) echo "<h3 style='color:red;'>$status</h3>"; ?>
<hr>
<div id='addevent'>
<h1>Add an event</h1>
<form method='post' action=''>
<input type='hidden' name='added_event'>
<div>Event Name: <input type='text' name='eventTitle'></div>
<div>Event Time: <input type='text' name='eventTime'></div>
<div>Event Description: <br><textarea name='eventDescription' rows="10" cols="50"></textarea></div>
<div>Event Date: <input type='date' name='eventDate'></div>
<div>Place: <input type='text' name='eventPlace'></div>
<br>
<br>
<input type='submit' value='ADD AN EVENT'>
</form>
</div>
<hr>

<hr>
	<?php echo drawDeleteEventForm($db);?>
</body>
</html>