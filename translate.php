<?php


$servername = "localhost";
$username = "";
$password = "";

$word = $_GET['word'];

$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);
$query = $pdo->prepare("SELECT french FROM translation WHERE english=:english");
$query->execute(array(':english'=> $word));
$row= $query->fetch();

if ($row[0]){     // I didn't understand the index here. Can you explain?
	echo $row[0];
}else {
	echo "No translations found.";
}

?>