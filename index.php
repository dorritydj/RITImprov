<?php
	define("PATH_TO_DB","db/eventsTable.sqlite");
	require_once('RITI_PHP_LIB.php');
	
	$db = openDB(PATH_TO_DB);
?>

<!DOCTYPE html>
<html>
<head>
<title>RIT Improv</title>
<link rel='stylesheet' type='text/css' href='styles/mainStyle.css' />
<link rel='stylesheet' type='text/css' href='styles/homeStyle.css' />
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></script>
<script src='scripts/mainScript.js'></script>
</head>

<body>
<div class='mainContainer'>
<div class='header'>
<img class='picLogo' src='images/logoBlue.png' alt='' />
<ul class='nav'>
<li class='current main'><a href='index.html'>home</a></li>
<li><a href='bios.php'>bios</a></li>
<li><a href='workshops.html'>workshops</a></li>
<li><a href='about.html'>about</a></li>
</ul>
</div>
<div class='contentContainer'>
<a href="http://www.dailymotion.com/playlist/x36ut9_ritimprov_improvamonium-2014/">
	<div class='improvamonium_2014'></div></a>
<div class='upcomingShows'>
	<?php echo createEvents($db); ?>
	
<!--calender-->
<!--<iframe class="cal" src="https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23c0c0c0&amp;src=nv1pidoeq8etvmfobf5bfjladk%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FNew_York" frameborder="0" scrolling="no"></iframe>-->
<!--end cal-->
</div>
<div class='pastShows'>
<p class='underline'>upcoming show</p>
<a href='https://www.facebook.com/ritimprov'><img src='images/FNI_Poster.png' alt='' /></a>
<p class='underline'>past show</p>
<img src='images/toes_poster.jpg' alt='' />
</div>
<div style='clear: both'></div>
</div>
<div class='footer'>

</div>
</div>
</body>

</html>