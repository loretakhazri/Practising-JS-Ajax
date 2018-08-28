<?php 

sleep(3);


$servername = "localhost";
$username = "";
$password = "";


$offset = $_GET['offset'];

$table_data .= "";

$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);
$query = $pdo->prepare("SELECT * FROM users ORDER BY id ASC limit $offset, 3");
$query->execute();
$rows= $query->fetchAll(PDO::FETCH_ASSOC);


foreach ($rows as $row){
  $table_data .= "<tr><td>". $row['id']. "</td><td>". $row['username'] . "</td><td>" . $row['email'] . "</td><td>" . $row['name'] . "</td></tr>";
}

echo $table_data;

?>