<?php

	require_once __DIR__ . '/../db.php';

	if($_SERVER['REQUEST_METHOD'] == "POST"){

		if(isset($_POST['method']) && $_POST['method'] == 'addArticle'){

			try{
				$article_id = addArticle($_POST['title'], $_POST['body'], $_POST['image_url']);
				echo $article_id;
			}
			catch(Exception $e){
				echo $e;
			}
		}
	}

	function addArticle($title, $body, $image_url){

		$conn = getConnection();
		$query = sprintf("INSERT INTO %s (title, body, image_url)
			VALUES ('%s', '%s', '%s')",
			NEWS_TABLE,
			mysql_real_escape_string($title),
			mysql_real_escape_string($body),
			mysql_real_escape_string($image_url));

		$result = mysql_query($query, $conn);
		if(!$result){
			mysql_close($conn);
			throw new Exception("Error creating article");
		}

		$article_id = mysql_insert_id($conn);
		return $article_id;
	}

	function getAllArticles(){

		$conn = getConnection();
		$query = "SELECT * FROM news";
		$result = mysql_query($query, $conn);

		if(!$result){
			mysql_close($conn);
			throw new Exception("Error creating article");
		}

		$rows = array();
		while($row = mysql_fetch_assoc($result)){
			$rows[] = $row;
		}

		return $rows;
	}

?>