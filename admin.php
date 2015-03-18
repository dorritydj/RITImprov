<!DOCTYPE html>
<html>
<head>
	<title>RIT Improv | Admin</title>
	<?php 
		require_once('db.php'); 
		session_start();
	?>

	<script>
		window.onload = function(){
			$("form[name='login']").submit(function(e){
				e.preventDefault();

				$.ajax({
					url: this.action + "?user=" + $("#admin_username").val() + "&pass=" + 
						$("#admin_password").val(),
					type: this.method,
					success: function(response){
						if(response == "true"){
							window.location = "admin.php";
						}
						else{
							$("#login_validate").show();
						}
					}
				});
			});
			$("#login_validate").hide();
		}
	</script>
</head>

<body>

	<?php include('admin_header.php'); ?>

	<?php if(isset($_SESSION['RITI']['admin_logged_in']) && $_SESSION['RITI']['admin_logged_in'] == true){ ?>

	<div class="container-fluid">
		<div class="row">
			<div class="col-md-offset-1 col-sm-offset-1">
				<h3>RIT Improv Admin Page</h3>
				<hr />
			</div>
		</div>
		<div class="row">
			<div class="col-md-offset-1 col-sm-offset-1 col-md-6">
				<p>This is the new RIT Improv site, and it's way better than any of the shit
					that Joe or Chris Baum did, because I know what I'm doing.</p>
			</div>
		</div>
	</div>

	<?php } else { ?>

	<div class="container-fluid">
		<form name="login" action="validate_login.php" method="GET">
			<div class="row">
				<div class="col-md-offset-1 col-sm-offset-1">
					<h3>Please Log In</h3>
					<hr />
				</div>
			</div>
			<div class="row" id="login_validate">
				<div class="col-md-offset-1 col-sm-offset-1 col-md-3 col-sm-3">
					<p class="error">Invalid username/password. Please try again.</p>
				</div>
			</div><br />
			<div class="row">
				<div class="col-md-offset-1 col-sm-offset-1 col-md-3 col-sm-3">
					<input type="text" class="form-control" id="admin_username" placeholder="Username..." required/>
				</div>
			</div><br />
			<div class="row">
				<div class="col-md-offset-1 col-sm-offset-1 col-md-3 col-sm-3">
					<input type="password" class="form-control" id="admin_password" required/>
				</div>
			</div>
			<div class="row title">
				<div class="col-md-offset-1 col-sm-offset-1 col-md-2">
					<input type="submit" class="btn btn-default" id="admin_login" value="Log In"/>
				</div>
			</div>
		</form>
	</div>

	<?php } ?>

</body>


</html>