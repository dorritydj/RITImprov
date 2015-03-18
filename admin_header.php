<link href="./css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="./css/site.css" rel="stylesheet" type="text/css" />
<script src="./scripts/jquery.js"></script>
<script src="./scripts/bootstrap.min.js"></script>
<script src="./scripts/site.js"></script>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" id="main_nav">
	<div class="container-fluid">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
			<span class="sr-only">Toggle Navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>			
		</button>
		<a class="navbar-brand" href="#">RITI Admin</a>
	</div>
	<?php if(isset($_SESSION['RITI']['admin_logged_in']) && $_SESSION['RITI']['admin_logged_in'] == true){ ?>
	<div class="collapse navbar-collapse" id="navbar-collapse" style="margin-left: 0;">
		<ul class="nav navbar-nav">
			<?php if($_SERVER['PHP_SELF'] == '/RITI_New/admin_news.php'){ ?>
			<li class="active"><a>News Items</a></li>
			<li><a href="admin_teams.php">Teams</a></li>

			<?php } else if($_SERVER['PHP_SELF'] == '/RITI_New/admin_teams.php'){ ?>
			<li><a href="admin_news.php">News Items</a></li>
			<li class="active"><a>Teams</a></li>

			<?php } else { ?>
			<li><a href="admin_news.php">News Items</a></li>
			<li><a href="admin_teams.php">Teams</a></li>
			<?php } ?>
		</ul>		
		<a href="#" class="navbar-right navbar-link" style="margin-right: 20px;" onclick="adminLogout();">Log Out</a>		
	</div>
	<?php } ?>
</nav>
<div id="navbar-gap"></div>