<!DOCTYPE html>
<html>
<head>
	<title>Improvamonium 2015 | Shirt Order</title>

	<link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="../css/improvamonium2015.css" rel="stylesheet" type="text/css" />
	<script src="../scripts/jquery.js"></script>
	<script src="../scripts/bootstrap.min.js"></script>
	<script src="./payment.js"></script>

	<script>

		$(function(){
			$("#main_form").submit(function(event) {

				event.preventDefault();
				if(validate_fields())
					kickoff_payment();
			});
		});

	</script>
</head>

<body>

	<div class="improvamonium-title">
		<img src="../img/Improvamonium_Banner_1702x630.png" alt="Improvamonium 2015" style="width: 100%;" />
	</div>

	<div class="container-fluid">

		<div class="col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-md-10 col-lg-10 bg-white rnd-box" style="margin-top: -10%;">
			
			<?php if(isset($_GET['success']) && $_GET['success'] == 'success') { ?>

			<div class="row">
				<h1 class="center">Thank you for purchasing an (or several) <span class="fg-pink">Improvamonium</span> shirt(s)!</h1>
				<br/><br/>
				<h2 class="center">Your order will be ready to pick up during the festival on April 3rd or 4th</h2>
				<br/><br/><br/>
				<div class="center">
					<button class="btn btn-info" style="font-size: 30px;" onclick="window.location='http://www.ritimprov.org'">Back to RIT Improv</button>
				</div>
			</div>

			<?php } else if (isset($_GET['success']) && $_GET['success'] == 'error') { ?>

			<div class="row">
				<h1 class="center">Oops!</h1>
				<br/><br/>
				<h2 class="center">Something went wrong while ordering your shirts. Please try again soon, or email ritimprov@gmail.com detailing your problem if it persists.</h2>
				<br/><br/><br/>
				<div class="center">
					<button class="btn btn-info" style="font-size: 30px;" onclick="window.location='shirts.php'">Try Again?</button>
				</div>
			</div>

			<?php } else if (!isset($_GET['success'])) { ?>

			<h1 class="center">Want an Improvamonium 2015 t-shirt? It's as easy as 1, 2, pay us money!</h1>
			<br/>

			<div class="center">
				<img src="../img/improvamonium_2015_tshirt_front.png" alt="Improvamonium t-shirt Front" style="height: 40%; width: 40%; display: inline-block;" />
				<img src="../img/improvamonium_2015_tshirt_back.png" alt="Improvamonium t-shirt Back" style="height: 40%; width: 40%; display: inline-block; margin-left: 20px;" />
			</div>
			<br/><br/>

			<form id="main_form">

				<div class="row">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="email">Email Address</label>
						<input required type="email" id="email" class="form-control" />
					</div>
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="team_name">Team Name</label>
						<input type="text" id="team_name" class="form-control" />
					</div>
				</div>

				<div class="row row-offset-md">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label>Number of shirts</label>
					</div>
				</div>

				<div class="row">
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="s_shirt">S: </label><input type="number" id="s_shirts" style="width: 60%; display: inline-block; margin-left: 10px;" class="form-control" onchange="update_num_shirts();" />
					</div>
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="m_shirt">M: </label><input type="number" id="m_shirts" style="width: 60%; display: inline-block; margin-left: 10px;" class="form-control" onchange="update_num_shirts();" />
					</div>
				</div>
				<div class="row row-offset-xs">
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="l_shirt">L: </label><input type="number" id="l_shirts" style="width: 60%; display: inline-block; margin-left: 10px;" class="form-control" onchange="update_num_shirts();" />
					</div>
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="xl_shirt">XL: </label><input type="number" id="xl_shirts" style="width: 60%; display: inline-block; margin-left: 10px;" class="form-control" onchange="update_num_shirts();" />
					</div>
				</div>

				<div class="row row-offset-md">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="f_name">First Name</label>
						<input required type="text" id="f_name" class="form-control" />
					</div>
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="l_name">Last Name</label>
						<input required type="text" id="l_name" class="form-control" />
					</div>
				</div>
				<div class="row row-offset-sm">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="bill_addr">Billing Address</label>
						<input required type="text" id="bill_addr" class="form-control" />
					</div>
				</div>
				<div class="row row-offset-sm">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="bill_city">Billing City</label>
						<input required type="text" id="bill_city" class="form-control" />
					</div>
				</div>
				<div class="row row-offset-sm">
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="bill_state">State</label>
						<input required type="text" id="bill_state" class="form-control" maxlength="2" />
					</div>
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="bill_zip">ZIP</label>
						<input required type="number" id="bill_zip" class="form-control" maxlength="5" />
					</div>
				</div>

				<div class="row row-offset-md">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="cc_num">Credit Card Number</label>
						<input required type="text" id="cc_num" class="form-control" maxlength="16" />
					</div>
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" style="vertical-align: top;">
						<strong style="font-size: 20px;">Number of shirts: <span id="total_shirts">0</span></strong>
						<p style="font-size: 20px;">($10 per shirt)</span></p>
					</div>
				</div>
				<div class="row row-offset-sm">
					<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
						<label for="cc_cvv">CVV</label>
						<input required type="number" id="cc_cvv" class="form-control" maxlength="3" />
					</div>
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xs-offset-4 col-sm-offset-4 col-md-offset-4 col-lg-offset-4" style="vertical-align: top;">
						<hr/>
					</div>
				</div>
				<div class="row row-offset-sm">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5">
						<label for="cc_exp_month">Expiration Date (MM/YYYY)</label><br/>
						<input required type="number" style="width: 20%; display: inline-block;" id="cc_exp_month" class="form-control" min="1" max="12" />
						<span style="font-size: 20px; margin-left: 10px;">/</span>
						<input required type="number" style="width: 35%; margin-left: 5%; display: inline-block;" id="cc_exp_year" class="form-control" min="2015" max="2025" />
					</div>
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" style="vertical-align: top;">
						<strong style="font-size: 40px;">Total Price: <span class="fg-pink" id="total_price">$0</span></strong>
					</div>
				</div>
				<div class="row row-offset-sm">
					<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xs-offset-6 col-sm-offset-6 col-md-offset-6 col-lg-offset-6" style="vertical-align: top;">
						<input type="submit" style="font-size: 30px; padding: 10px;" class="btn btn-info" value="BUY MY SHIRTS!" />
					</div>
				</div>

				<br /><br /><br />
			</form>
			<?php } ?>
		</div>
		<br /><br /><br />
	</div>
</body>

</html>