<?php


$servername = "localhost";
$username = "";
$password = "";

try {
    $conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully"; 
    echo "<br>";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }


    $word = $_GET['word'];

$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);
$query = $pdo->prepare("SELECT french FROM translation WHERE english=:english");
$query->execute(array(':english'=> $word));
$row= $query->fetch();

if ($row[0]){
	echo $row[0];
}else {
	echo "No translations found.";
}

?>