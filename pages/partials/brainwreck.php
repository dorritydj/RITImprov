<!DOCTYPE html>
<html>
<head>
	<title>RIT Improv</title>
	<?php require_once('db.php'); ?>
</head>

<body>

	<?php include('header.php'); ?>

	<div class="container-fluid">
		<div id="troupe_info_bg"></div>
		<div id="troupe_info">
			<p>Info</p>
		</div>

		<div class="row">
			<div class="col-md-offset-3 col-sm-offset-2 col-md-6 col-sm-6">
				<img src="./img/brainwreck_logo.png" alt="BrainWreck Improv" id="bw_logo" class="center"
					onhover="showTroupeInfo();" />
			</div>
		</div>
		<div class="row title">
			<div class="col-md-offset-5 col-sm-offset-5">
				<input type="button" class="btn btn-primary btn-lg" value="Meet the Team!"/>
			</div>
		</div>
	</div>

</body>


</html>