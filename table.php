<?php 

sleep(3);


$servername = "localhost";
$username = "";
$password = "";


<<<<<<< HEAD
$offset = $_GET['offset'];

$table_data .= "";

$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);
$query = $pdo->prepare("SELECT * FROM users ORDER BY id ASC limit $offset, 3");
=======
$last_id = $_GET['last_id'];
$table_data .= "";

$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);
$query = $pdo->prepare("SELECT * FROM users WHERE id > $last_id");
>>>>>>> 5f702099a1e22a25920aa9e404812f6fb026b897
$query->execute();
$rows= $query->fetchAll(PDO::FETCH_ASSOC);


foreach ($rows as $row){
  $table_data .= "<tr><td>". $row['id']. "</td><td>". $row['username'] . "</td><td>" . $row['email'] . "</td><td>" . $row['name'] . "</td></tr>";
}

echo $table_data;

?>