<!DOCTYPE html>
<html>
<head>
<title>RIT Improv</title>
<link rel='stylesheet' type='text/css' href='styles/mainStyle.css' />
<link rel='stylesheet' type='text/css' href='styles/biosStyle.css' />
<link href='http://fonts.googleapis.com/css?family=PT+Sans:700,400' rel='stylesheet' type='text/css'>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>
<script src='scripts/mainScript.js'></script>
<script src='scripts/bios.js'></script>

<?php

	function getHeads($dir){
		if($handle = opendir($dir)){

			while(false !== ($entry = readdir($handle))){
				if(strpos($entry, 'Head') > -1){
					echo "<img src='$dir" . $entry . "' class='bioThumb' id='" . 
						substr($entry, 0, strlen($entry) - 8) . "_head' onclick='changeBio(this);'/>";
				}
			}
		}
	}

	function createBios($dir){
		if($handle = opendir($dir)){

			$curName = '';
			while(false !== ($entry = readdir($handle))){
				if(strpos($entry, "Bio") > -1){
					$newName = substr($entry, 0, strpos($entry, "Bio"));					
					if($newName != $curName){
						if($curName != ''){
							echo '</div>';
						}

						$curName = $newName;						
						echo "<div id='" . $newName . "_bio'>";
						$file = fopen($dir . $entry, 'r');
						echo "<h3 class='bioTitle'>" . fgets($file) . "</h3>";
						echo "<p class='bioContent'>" . fread($file, filesize($dir . $entry)) . "</p>";
						fclose($file);
					}					
				}
				else if(strpos($entry, 'Body') > -1){
					echo '<div class="bioPicWrapper">';				
					echo "<img src='$dir" . $entry . "' class='bioPic' />";
					echo '</div>';
				}				
			}

			echo '</div>';
		}
	}

?>
</head>

<body>
<div class='mainContainer'>
<div class='header'>
<img class='picLogo' src='images/logoPink.png' alt='' />

<ul class='nav'>
<li><a href='index.php'>home</a></li>
<li class='current main'><a href='bios.html'>bios</a></li>
<li><a href='workshops.html'>workshops</a></li>
<li><a href='about.html'>about</a></li>
</ul>
</div>
<div class='teamChooser'>
	<span id="lb">&#12296;</span>
	<h1 id="bw" class="current">BrainWreck Improv</h1>
	<h1 id="imv">The Improvessionals</h1>
	<h1 id="wip">Work in Progress</h1>
	<h1 id="alum">Alumni</h1>
	<span id="rb">&#12297;</span>
</div>
<div class='contentContainer'>
<div id="bw_body">
	<div id="bw_heads">
		<?php getHeads('./images/bios/bw/'); ?>
	</div>
	<div id="bw_bios">
		<?php createBios('./images/bios/bw/'); ?>
	</div>
</div>
<div id="imv_body">
	<h2>Improvessionals</h2>
</div>
<div id="wip_body">
	<h2>WIP</h2>
</div>
<div id="alum_body">
	<div id="alum_heads">
		<?php getHeads('./images/bios/alum/'); ?>
	</div>
	<div id="alum_bios">
		<?php createBios('./images/bios/alum/'); ?>
	</div>
</div>
</div>
<div class='footer'>

</div>
</div>
</body>

</html>