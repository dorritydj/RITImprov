<?php

define('SALT','bigbooty');

function openDB($path)
{
	try
	{
		if(file_exists($path))
		{
			$db = new PDO('sqlite:' . $path);
			$db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		}
		else
		{
			echo 'ERROR: File not found at ' . $path;
		}
	}
	catch (Exception $e)
	{
		echo $e->getMessage();
	}
	
	return $db;
}
function createEvents($db)
{
	$statement = "SELECT * FROM Events";
	$result = $db->query($statement);
	$allRows = $result->fetchAll();
	
	$currtime = date('U');
	//$html = $currtime;
	
	$times = array();
	foreach($allRows as $key=>$row)
	{
		//gets the dates nearest ot current
		$time = $row['EventTime'];
		$timeind = strpos($time,',',10);
		$timesub = substr($time,0,$timeind);
		$date =  strtotime($timesub);
		
		$times[$key] = $date;
	}
	$lastmin = 1000000;
	$lastrow = -1;
	
	$lastmin2 = 100000;
	$lastrow2 = -1;
	foreach($times as $key=>$datetime)
	{
		if ($datetime > $currtime)
		{
			if (($datetime - $currtime) < $lastmin)
			{
				$lastmin = $datetime;
				$lastrow = $key;
			}
			else if (($datetime - $currtime) < $lastmin2)
			{
				$lastmin2 = $datetime;
				$lastrow2 = $key;
			}
		
		}
	}
	
	$highestRow = count($allRows);
	
	if ($lastrow == -1)
	{
		$lastrow = $highestRow - 1;
		$lastrow2 = $highestRow - 2;
	}
	else if ($lastrow2 == -1)
	{
		$lastrow2 = $highestRow - 2;
	}
	
	
	$html = '';
		//pulls the last two in the db
		$title = $allRows[$lastrow]['EventTitle'];
		$time = $allRows[$lastrow]['EventTime'];
		$description = $allRows[$lastrow]['Description'];
	
		$html .= "<div class='showHead'>";
		$html .= "<span class='showName'>$title</span>";
		$html .= "<span class='showDate'>$time</span>";
		$html .= "</div>";
		
		$html .= "<div class='showDescrip'><p>$description</p></div>";
	
		$title = $allRows[$lastrow2]['EventTitle'];
		$time = $allRows[$lastrow2]['EventTime'];
		$description = $allRows[$lastrow2]['Description'];
	
		$html .= "<div class='showHead'>";
		$html .= "<span class='showName'>$title</span>";
		$html .= "<span class='showDate'>$time</span>";
		$html .= "</div>";
		
		$html .= "<div class='showDescrip'><p>$description</p></div>";
		
	
	return $html;
}
function getHighestIDs($db)
{
	$statement = "SELECT ID FROM EVENTS";
	$result = $db->query($statement);
	$allRows = $result->fetchAll();
	
	$highNum = -1;
	$secondHighNum = -1;
	foreach ($allRows as $row)
	{
		$num = $row['ID'];
		
		if ($num > $highNum)
		{
			$highNum = $num;
		}
		else if ($num > $secondHighNum)
		{
			$secondHighNum = $num;
		}
	}
	$numbers = array($highNum,$secondHighNum);
	
	return $numbers;
}
function deleteEvent($db,$user)
{

	if (array_key_exists('id',$_POST))
	{
		$id = intval($_POST['id']);
		$date = date(DATE_RFC822);
		
		$sql = "DELETE FROM Events WHERE ID='$id'";
		$statement = $db->prepare($sql);
		$statement->execute();
		
		if($statement && $statement->rowCount() > 0)
		{
			$status = "Success! Event ID=$id deleted from DB.";
			$string = "Username: $user, deleted event with an id of $id on $date\r\n";
			file_put_contents('deleteLog.txt',$string,FILE_APPEND);
			
		}
		else
		{
			$status = "<p class='error'>Problem with DELETE! Error:" . $statement->errorCode() . "</p>";
		}
	}
	else
	{
		$status = "<p class='error'>Problem with id!</p>";
	}
	return $status;
}
function addEvent($db, $user)
{
	if (checkInput('eventTitle') && checkInput('eventTime') 
		&& checkInput('eventDescription') && checkInput('eventDate') && checkInput('eventPlace'))
		{
			//$user = $_POST['user'];
			$title = sanitize_string($_POST['eventTitle']);
			$time = sanitize_string($_POST['eventTime']);
			$descript = sanitize_string($_POST['eventDescription']);
			
			$title = htmlentities($title, ENT_QUOTES | ENT_HTML401);
			//$title = addslashes($title);
			$descript = htmlentities($descript, ENT_QUOTES | ENT_HTML401);
			//$descript = addslashes($descript);
			
			$date = sanitize_string($_POST['eventDate']);
			
			$date = strtotime($date);
			
			$date = date('M. d, Y',$date); 
			
			$time = $date . ', '. sanitize_string($_POST['eventPlace']) . ' - ' . sanitize_string($_POST['eventTime']);
			
			$sql = "INSERT INTO Events(EventTitle,EventTime,Description) VALUES (\"". $title."\",\"".$time."\",\"".$descript."\")";
			
			$date = date(DATE_RFC822);
			
			$string = "Username: $user, added $title at $time with a description of $descript on $date\r\n";
			
			$statement = $db->prepare($sql);
			
			$statement = $statement->execute();
			
			
			if ($statement)
			{
				$id = $db->lastInsertId();
				$status = "Success! Event added to DB with id=$id.";
				
				file_put_contents('addLog.txt',$string,FILE_APPEND);
			}
			else
			{
				$status = 'There was an error processing your request';
			}
		}
		else $status = 'Please fill out ALL fields';
	
	return $status;
	
}
function checkInput($str)
	{
		$allTrue = false;
		if(array_key_exists($str,$_POST) && strlen($_POST[$str]) > 0) $allTrue = true;
		return $allTrue;
	}
function testPassword($userDB)
{
	$unencrypt = $_POST['passField'];
	$encrypt = sha1($unencrypt);
	$username = $_POST['user'];
	
	try
	{
	$statement = "SELECT * FROM Users WHERE username = '$username'";
	$result = $userDB->query($statement);
	$allRows = $result->fetchAll();
	
	if(count($allRows) > 0)
	{
	$inputPass = $allRows[0];
	
	$pass = $inputPass['pass'];
	}
	else $pass = 'WRONG';
	
	if ($pass == $encrypt)
	{
		return true;
	}
	else return false;
	}
	catch (Exception $e)
	{
		echo $e->getMessage();
	}
}
function drawDeleteEventForm($db)
{
	$html = "<div class='form'>\n";
	$html .= "<h3>Delete Event (Please wait until an event has been over for a month)</h3>\n";
	$html .= "<form action = 'index.php' method='post'>\n";
	$html .= "<table border='1'>\n";
	$html .= "<tr><td>ID</td><td>EventTitle</td><td>EventTime</td><td>Description</td><td>Delete?</td></tr>\n";
	// prepare query
	$sql = "SELECT * FROM Events";
	$statement = $db->prepare($sql);
	$statement->setFetchMode(PDO::FETCH_ASSOC); 
	
	// execute query 
	$statement->execute();
	$allRows = $statement->fetchAll();
	if (count($allRows) > 0){
		// Now loop through all rows
	foreach($allRows as $row){
			$html .= "<tr>";
			foreach($row as $colValue){
				$html .= "<td>$colValue</td>";
			}
			$ID = $row['ID'];
			$html .= "<td><input type='radio' name='id' value='$ID' /></td>";
			$html .= "</tr>\n";
		}
		// done looping through rows
	}else{
		// 0 rows in $allRows
		$html .= "<tr><th>No rows returned</th></tr>\n";
	} 
	
	$html .= "</table>";
	$html .= "<input type='reset' value='Reset Form' />";
	$html .= "<input type='submit' name='delete_event_submit' value='Delete Event' />";
	$html .= "</form>\n";
	$html .= "</div>\n";
	return $html;
}
function sanitize_string($string){
		$string = trim($string);
		$string = strip_tags($string);
		return $string;
	}
function checkLogin($db = null)
{
	session_start();
	
	if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] == false)
	{
		//check for login details through post
		if (array_key_exists('user',$_POST)&&array_key_exists('pass',$_POST)&&$db != null)
		{
			$user = sanitize_string($_POST['user']);
			$pass = sanitize_string($_POST['pass']);
			
			$query = "SELECT * FROM Users WHERE username = \"$user\"";
			
			$results = $db->query($query);
			
			$results = $results->fetchAll();
			
			if (count($results) > 0)
			{
				//test the password
				//$result = $results->fetch();
				
				if($results[0]['pass'] == sha1($pass.SALT))
				{
					//SET UP THE SESSION
					$_SESSION['logged_in'] = true;
					$_SESSION['username'] = $user;
					return true;
				}
				else
					return false; //if pass is wrong
			}
			else
			{
				return false; //if user doesn't exizst
			}
		}
		
		return false; //should be false
	}
	else if ($_SESSION['logged_in'] == true && isset($_SESSION['username']))
	{
		return true;
	}
}
function logout()
{

}
?>