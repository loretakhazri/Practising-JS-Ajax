<?php


$servername = "localhost";
$username = "";
$password = "";
//-- Making query for getting first 3 rows from users table
$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);

$limit = 3;
$offset = 0;

$query = $pdo->prepare("SELECT * FROM users ORDER BY id ASC limit $offset, 3 ");
=======
$query = $pdo->prepare("SELECT * FROM users ORDER BY id ASC limit $offset, 3");//Changed this line
>>>>>>> 807f9649b746dbff0142a9498b18a27f3dded671
$query->execute(array());
$rows= $query->fetchAll(PDO::FETCH_ASSOC);

$table_data = " ";


foreach ($rows as $row){
  $table_data .= "<tr><td>".$row['id']. "</td><td>".$row['username']. "</td><td>". $row['email']. "</td><td>" . $row['name'] . "</td></tr>";
=======
$offset = 0; //new changes
$limit = 3; //new changes

foreach ($rows as $row){
  $table_data .= "<tr><td>".$row['id']. "</td><td>".$row['username']. "</td><td>". $row['email']. "</td><td>" . $row['name'] . "</td></tr>";
  $offset += $limit; //new changes
>>>>>>> 807f9649b746dbff0142a9498b18a27f3dded671
}
$offset += $limit;
?>

<!DOCTYPE>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Testing my skills</h1>
  <h2 id="h2">Aha</h2>
  <h3 id="h3">yes</h3>
  <h4 id="h4">Are you ready for </h4>

  <button id="user">Change user</button>
  <button id="change-name">Change name</button>
  <button id="change-h3">Change h3</button>
  <button id="change-h4">Change h4</button>

    <button id="btn" type="button" class="btn">Subscribe</button>
    <div id="modal1" class="modal" role="dialog">
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
            <button id="close" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
 
 <!-- <div class="div">
    <h2>Converting temperature from Celsius To Farenheit</h2>
    <input type="text" name="temp"> C
    <p id="temperature"></p>
  </div>

  <div class="div">
    <h2>Translation from English to French</h2>
    <input type="text" name="word">
    <div id="translation"></div>
  </div>
-->

  <img id="fashion-img" src="fashion1.jpeg">



    <img id="cha" src="morning.jpeg">
    <button id="show-nav">Show navbar</button>
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
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

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

  <p class="p1">Prieš 12-15 tūkstančių metų Lietuvos pajūryje stūksojęs ledynas atsitraukdamas suformavo moreninį gūbrį. Olando kepurė vadinamas siauras Baltijos jūros kranto ruožas, kur aukštas ir status moreninis skardis kone remiasi į jūrą. Skardžio aukštis siekia iki 24 metrų virš jūros lygio. Šiandien Olando kepurė populiari kaip grožėjimosi kraštovaizdžio vieta, tačiau seniau ji buvo reikšmingas natūralus kranto navigacijos orientyras, žymintis pavojingą, akmenuotą pakrantės ruožą, prie kurio suduždavo nemažai laivų.</p>
  <button id="btn2">More</button>

  <p class="p2">Olandų kepurės kalnas yra nuolat ardomas bangų mūšos maždaug po 50 cm kasmet. Tokio aukšto skardingo jūros kranto Lietuvos pajūryje daugiau nėra. Ardomas Olandų kepurės skardis maitina smėliu puikiuosius Palangos ir Girulių paplūdimius.</p>


<div id="card" class="card" style="width: 18rem;">
  <img class="card-img-top" src="img.jpeg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div>
  <button id="img-btn" class="btn btn-info">Click the button</button>
  <img class="img" src="img.jpeg">
</div>



<div>
  <h3>Cities</h3>
  <div>
      <div id="card1" class="card" style="width: 30%; display:inline-block;">
        <img class="card-img-top" src="img.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
   

      <div id="card2" class="card" style="width: 30%;display:inline-block;">
        <img class="card-img-top" src="img.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>


      <div id="card3" class="card" style="width: 30%;display:inline-block;">
        <img class="card-img-top" src="img.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

  </div>
</div>

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

            data:{offset:<?=$offset;?>},
=======
            data:{offset:<?=$offset;?>},//Changed this line

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
