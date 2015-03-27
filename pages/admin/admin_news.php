<!DOCTYPE html>
<html>
<head>
	<title>RIT Improv | Admin</title>
	<?php 
		require_once('db.php');
		require_once('./php_objects/article.php');
		session_start();
	?>

	<script>

		window.onload = function(){
			$('#admin_tabs a').click(function(e){
				e.preventDefault();
				$(this).tab('show');
			});

			$("#admin_tabs a:first").tab('show');

		}
		
	</script>
</head>

<body>

	<?php include('admin_header.php'); ?>

	<?php if(isset($_SESSION['RITI']['admin_logged_in']) && $_SESSION['RITI']['admin_logged_in'] == true){ ?>

	<div class="container-fluid">
		<ul class="nav nav-tabs col-sm-offset-1 col-md-offset-1" role="tablist" id="admin_tabs">
			<li class="active"><a href="#new" role="tab" data-toggle="tab">New Article</a></li>
			<li><a href="#edit" role="tab" data-toggle="tab">Edit Article</a></li>
			<li><a href="#delete" role="tab" data-toggle="tab">Delete Article</a></li>
		</ul>
		<div class="tab-content">
			<div class="tab-pane active" id="new">
				<div class="row title">
					<div class="col-md-offset-1 col-sm-offset-1 col-sm-4 col-md-4">
						<label for="txt_new_title">Title</label>
						<input type="text" class="form-control" placeholder="Title..." id="txt_new_title"/>
					</div>
				</div>
				<div class="row" style="margin-top: 20px;">
					<div class="col-md-offset-1 col-sm-offset-1 col-sm-6 col-md-6">
						<label for="txt_new_body">Body</label>
						<textarea class="form-control" placeholder="Enter the body of the article..."
							id="txt_new_body" style="height: 200px;" rows="10" cols="200"></textarea>
					</div>
				</div>
				<div class="row" style="margin-top: 20px;">
					<div class="col-md-offset-1 col-sm-offset-1 col-sm-6 col-md-6">
						<label for="file_upload_new">Upload Header Image</label>
						<input type="file" class="form-control" id="file_upload_new" />
		 			</div>
				</div>
				<div class="row" style="margin-top: 20px;">
					<div class="col-md-offset-1 col-sm-offset-1 col-sm-2 col-md-2">
						<input type="button" class="btn btn-default" id="button_new" value="Post!" 
							onclick="addArticle($('#txt_new_title').val(), $('#txt_new_body').val(), './img/uploads/' + $('#file_upload_new').val().substr(12));"/>
		 			</div>
				</div>
			</div>

			<div class="tab-pane" id="edit">
				<div class="row title"></div>
				<?php

					$rows = getAllArticles();
					foreach($rows as $row){
						echo "<div class='well well-lg'>";
						echo "<strong style='cursor: pointer;' onclick='expandEdit(" . $row['news_id'] .
							");'>" . $row['title'] . "</strong>";
						echo "<input type='text' style='display: none;'> id='" . $row['news_id'] . "_title' " . $row['title'] . "</input>";
						echo "<textarea id='" . $row['news_id'] . "_body'>" . $row['body'] . "</textarea>";
						echo "<input type='button' class='btn btn-default' value='Submit Changes' onclick='editArticle(" . $row['news_id'] . ");'/>";
						echo "</div>";
					}
				?>
			</div>

			<div class="tab-pane" id="delete">
				<div class="row title">
					<div class="col-md-offset-1 col-sm-offset-1 col-sm-4 col-md-4">
						<h3>Delete Article</h3>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php } else { ?>

	<div class="container-fluid">
		<h2>You must be logged in to view this page</h2>
		<a href="./admin.php">Return to Log In</a>
	</div>

	<?php } ?>

</body>


</html>