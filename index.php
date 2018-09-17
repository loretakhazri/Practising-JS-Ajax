<?php


$servername = "localhost";
$username = "";
$password = "";
//-- Making query for getting first 3 rows from users table
$pdo = new PDO ("mysql:host=$servername;dbname=test", $username, $password);

?>

<!DOCTYPE>
<head>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<div>
  <button id="clickBtn">Watch</button>
  <img class="img" src="fashion1.jpeg">
</div>

<script type="text/javascript">
  
  document.getElementById('clickBtn').addEventListener('click', function() {

      document.querySelector('img').style.display = "block";
      document.getElementById('clickBtn').addEventListener('dblclick', function(){
        document.querySelector('img').style.display = "none";
      });


  });




</script>




















<ul id="parent-list">
  <li id="post-1" class="btn btn-default btn-warning">Item 1</li>
  <li id="post-2" class="btn btn-default btn-warning">Item 2</li>
  <li id="post-3" class="btn btn-default btn-warning">Item 3</li>
  <li id="post-4" class="btn btn-default btn-warning">Item 4</li>
  <li id="post-5" class="btn btn-default btn-warning">Item 5</li>
  <li id="post-6" class="btn btn-default btn-warning">Item 6</li>
</ul>


<div id="myDiv">
  <a class="a" href="#">Click me</a>
</div>

<script type="text/javascript">
  document.getElementById("parent-list").addEventListener("mouseover", function(e) {
  // e.target is the clicked element!
  // If it was a list item
    if(e.target && e.target.nodeName == "LI") {
      // List item found!  Output the ID!
      e.target.setAttribute('class', 'btn btn-default btn-danger');
      document.getElementById("parent-list").addEventListener("mouseout", function(e){
        if(e.target && e.target.nodeName == "LI") {
        e.target.setAttribute('class', 'btn btn-default btn-warning');
      }
      });
    }
  });

  document.getElementById('myDiv').addEventListener('mouseover', function(e){
    if(e.target && e.target.matches('a.a')){
      e.target.style.color = 'red';
      document.getElementById('myDiv').addEventListener('mouseout', function(e){
        if(e.target && e.target.matches('a.a')){
          e.target.style.color = 'blue';
        }
      });
    }
  });
</script>

  <form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p id="p"></p>

  <button class="voila btn-succes btn btn-default">Voila</button>

  <button id='bg'>Change color</button>
    <script>
      var btn = document.querySelector('#bg');
      function random(number) {
        return Math.floor(Math.random()*number);
      }
      function bgChange() {
        var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = rndCol;
      }
      //window.onkeypress = bgChange; 
      btn.ondblclick = bgChange;
    </script>


  <div id="input-value-change" style="width:200px; background-color: green;">
    <input id="this-input" type="" name="">
    <p>Empty</p>
  </div>
  <div id="input-value-change2" style="width:200px; background-color: blue;">
    <input id="this-input2" type="" name="">
    <p>Empty</p>
  </div>
<button id="color">Change color</button>
  <button id="min" class='btn-warning'>Show min number</button>
  <button id="minNumber" class = "btn btn-default btn-danger">Another min number</button>
  <button id="number" class="btn btn-default btn-success">Min number</button>
  <button id="numberMin" class="btn btn-default btn-primary">Min number another</button>
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
  <div class="output"></div>
  <div class="guest-list">
      <h4>Guest list</h4>
      <p class="admitted">Admit: </p>
      <p class="refused">Refuse: </p>
  </div>
 
</div>
<div class="outputted">
  <input type="" name="">
  <button>Search</button>
  <ul></ul>
</div> 

 <input class="numberInput" type="text">
 
  <p id="la">LALALALLALALALLALA</p>

  <script>
    var input = document.querySelector('.numberInput');
    var para = document.querySelector('#la');
    function squared(num) {
      return num * num;
    }
    function cubed(num) {
      return num * num * num;
    }

    input.onchange = function() {

      var num = input.value;

      if(isNaN(num)) {
        para.textContent = 'You need to enter a number!';

      } else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
                           num + ' cubed is ' + cubed(num) + '. ';
      }
    }
  </script>

<!--<div id="creatingAlert">
 
    <style>
      .msgBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 242px;
        background: #eee;
      }
      .msgBox p {
        line-height: 1.5;
        padding: 10px 20px;
        color: #333;
        padding-left: 82px;
        background-position: 25px center;
        background-repeat: no-repeat;
      }
      .msgBox button {
        background: none;
        border: none;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1.1rem;
        color: #aaa;
      }
    </style>
     <button>Display message box</button>
     <script type="text/javascript">

        var button = document.querySelector('#creatingAlert button');
        button.onclick = function () {
          displayMessage('Woo, its another text!', 'chat');
        } 
        function displayMessage(msgText, msgType) {
          var html = document.querySelector('html');

          var panel = document.createElement('div');
          panel.setAttribute('class', 'msgBox');
          html.appendChild(panel);

          var msg = document.createElement('p');
          msg.textContent = msgText;
          panel.appendChild(msg);

          var closeBtn = document.createElement('button');
          closeBtn.textContent = 'x';
          panel.appendChild(closeBtn);

          closeBtn.onclick = function (){
            panel.parentNode.removeChild(panel);
          }

          if(msgType === "warning"){
            msg.style.backgroundImage = 'url(warning.png)';
            msg.style.backgroundColor = 'red';
          } else if (msgType === "chat") {
            msg.style.backgroundImage = 'url(chat.png)';
            msg.style.backgroundColor = 'aqua';
          } else {
            msg.style.paddingLeft = '20px';
          }
        }

        var button = document.querySelector('#creatingAlert button');
        button.onclick = function (){
          displayMessage("wow, its another message.", 'warning');
        }
     </script>
</div> -->
<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous">
  </script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  <script type="text/javascript" src="app.js"></script>

<script type="text/javascript">

</script>
</body>
</html>
