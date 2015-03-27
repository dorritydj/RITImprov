<?php

///////////////////////////////
//         INCLUDES          //
///////////////////////////////


// HTTP POST REQUEST
if($_SERVER['REQUEST_METHOD'] == 'POST'){

	if(isset($_POST['name']) && isset($_POST['bio']) && isset($_POST['num_members']) && isset($_POST['contact'])
		&& isset($_POST['email']) && isset($_POST['groupType']) && isset($_POST['days']) &&
		isset($_POST['logo']) && isset($_POST['video_link'])) {

		$availFriday = in_array("Friday", $_POST['days']) ? 'yes' : 'no';
		$availSaturday = in_array("Saturday", $_POST['days']) ? 'yes' : 'no';

		$filename = "applications.txt";
		$file = fopen($filename, 'a');
		$entry = $_POST['name'] . "|" . $_POST['bio'] . "|" . $_POST['num_members'] . "|" . 
			$_POST['contact'] . "|" . $_POST['email'] . "|" . $_POST['groupType'] . "|" . 
			$availFriday . "|" . $availSaturday . "|" . $_POST['logo'] . "|" . $_POST['video_link'] . "\n";

		fwrite($file, $entry);
		fclose($file);

		echo 1;
	}

	// Front end validation failed
	else{

		echo 'validate';
	}
}

?>