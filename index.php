<?php


$servername = "localhost";
$username = "";
$password = "";

//-- Making query for getting first 3 rows from users table
$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);
$query = $pdo->prepare("SELECT * FROM users ORDER BY id ASC limit 3");
$query->execute(array());
$rows= $query->fetchAll(PDO::FETCH_ASSOC);

$table_data = " ";
$last_id = 0;

foreach ($rows as $row){
  $table_data .= "<tr><td>".$row['id']. "</td><td>".$row['username']. "</td><td>". $row['email']. "</td><td>" . $row['name'] . "</td></tr>";
  $last_id++;// After loop we will know that the last_id = 2, it will be necessary to know it for loading for data from users table to not loop from the beginning but from that row where loop stopped
}
?>

<!DOCTYPE>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Testing my skills</h1>
  <div class="div">
    <button class="toggle">Toggle</button>
    <img class="image" src="img.jpeg">
  <div>

  <div class="div">
    <button id="btn" type="button" class="btn">Info</button>
    <div id="modal1" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Subscribe</h5>
            <button type="button" class="close btn-secondary" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Please subscribe here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  <div>

  <div class="div">
    <h2>Converting temperature from Celsius To Farenheit</h2>
    <input type="text" name="temp"> C
    <p id="temperature"></p>
  </div>

  <div class="div">
    <h2>Translation from English to French</h2>
    <input type="text" name="word">
    <div id="translation"></div>
  </div>

  <div class="div">
    <button id="toggle-nav" class="btn btn-warning">Navbar</button>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  </div>

<h2>Users table</h2>
<table>
  <tr>
    <th>Id</th>
    <th>Username</th>
    <th>Email</th>
    <th>Name</th>
  </tr>
  <tbody id="table_data">
    <?php echo $table_data; ?>
  </tbody>
</table>
<button id="load">Load more data</button>

<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script type="text/javascript" src="app.js"></script>

<script type="text/javascript">
      $('#load').click(function(){
      $('#table_data').append('<p id="loading">Loading more data... </p>');

          $.ajax({
            url: 'table.php',
            type: 'get',
            data:{last_id:<?=$last_id;?>},// Where we get last_id in this row from? This one (<?=$last_id;?>) we should write to pass to the GET in order to get number, true? 
            success: function(r){
              $('#la').remove();
              $('#loading').remove();
              $('#table_data').append(r);
            }
          });
      });

</script>
</body>
</html>