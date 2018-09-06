$( document ).ready(function() {
    console.log( "ready!" );

/////////////////////////////////////////////
//Practising if statements
 /* var hotMilk = "I like hot milk";
        if(hotMilk === "I like hot milk"){
            alert("yummy!");
        }else {
            alert("shitty stuff");
        }

    var number = 10;
         if(number > 10){
            alert("its more than 10");
         } else if(number == 10){
            alert("its 10");
         } else {
            alert("its less than 10");
         }

    var a = 3;
    var b = 4;
        if(a == 3 && b == 4){
            alert(a+b);
        } else {
            alert("Wrong");
        } 

    var la = 10;
    var ba = 5;
        if(la === 10 && ba === 5){
            alert(la*ba);
        } else {
            alert("wrong");
        } 

    var ar = true;
        if(ar ===true){
            alert("correct");
        } else {
            alert("incorrect");
        } 

    var c = 5;
        if(c>5){
            alert("its more than 5");
        }else if(c===5){
            alert("its 5");
        } else {
            alert("its less than 5");
        }

    var ha = 25;
    var ra = 5;
        if(ha == 25 || ra == 5){
            alert("its "+(ha*ra));
        } else {
            alert ("wrong");
        } 

    var say = "Say";
    var hello = " hello";
        if(say != null && hello != null){
            alert(say+hello);
        } else {
            alert("be silent");
        } */
//////////////////////////////////////////////////////
//Random function
    function sum(a,b){
        var c = a+b;
        return c;
    }
    sum(2,3);
    console.log(sum(2,3));

//////////////////////////////////////////////////////
//Debounce function
    function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
        };
    };
    var myEfficientFn = debounce(function() {
    }, 500);
    window.addEventListener('resize', myEfficientFn);

///////////////////////////////////////////////////////////
// Practising click, mouseover, mouseout events in jQuery
    $('#btn').click(function(){
        $('#modal1').fadeIn(500);
    });

    $('.btn-secondary').click(function(){
        $('#modal1').fadeOut();
    });

    $('#show-nav').click(function(){
        $('#nav').toggle();
    });

    $('#btn2').click(function(){
        $('.p2').show();
    });

    $('#img-btn').click(function(){
        $('.img').toggle();
    });

    $('table').mouseover(function(){
        $('table:hover').css("background-color", "#990100");
        $('#card').show();
    });

    $('table').mouseout(function(){
        $('#card').hide();
    });

    $('.p1').mouseover(function(){
        $('.p2').show();
    });

    $('.p1').mouseout(function(){
        $('.p2').hide();
    });
//////////////////////////////////////////////////////////////////
    //on clicking image, image changes to another image
    var myImage = document.querySelector('#cha');
    myImage.onclick = function(){
        console.log('yes, I clicked the image');
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'morning.jpeg') {
            myImage.setAttribute('src', 'night.jpeg');
        } else {
            myImage.setAttribute('src', 'morning.jpeg');
        }
    }
/////////////////////////////////////////////////////////////////
    // on mouseover on image, image changes to another image
    var myFashionImage = document.querySelector('#fashion-img');
    myFashionImage.onmouseover = function () {
        var myFashionSrc = myFashionImage.getAttribute('src');
        if (myFashionSrc === 'fashion1.jpeg'){
            myFashionImage.setAttribute('src', 'fashion2.jpeg');
        } else {
            myFashionImage.setAttribute('src', 'fashion1.jpeg');
        }
    }
//////////////////////////////////////////////////////////////////
    //changing user name
     var button = document.querySelector('#user');
     var heading = document.querySelector('h1');

     function setUserName() {
         var myName = prompt('Please enter your name.');
         localStorage.setItem('name', myName);
         heading.textContent = "You are cool " + myName;
     }
     if(!localStorage.getItem('name')){
         setUserName();
     } else {
         var storedName = localStorage.getItem('name');
         heading.textContent = "Welcome back " + storedName;
     }

     button.onclick = function () {
         setUserName();
     }
/////////////////////////////////////////////////////////////////
     //changing h2 (id=h2) name by clicking button
    var nameButton = document.querySelector('#change-name');
    var heading2 = document.querySelector('#h2');

    function changeName () {
        var name = prompt('Enter your name here.');
        localStorage.setItem('thisname', name);
        heading2.textContent = "Awesome name, " + name;
    }
    if(!localStorage.getItem('thisname')){
        changeName();
    }else {
        var storedThisName = localStorage.getItem('thisname');
        heading2.textContent = "Hello again, dear " + storedThisName;
    }
    nameButton.onclick = function () {
        changeName();
    }
//////////////////////////////////////////////////////////////
//Changing h3(id=h3) text by clicking button(id=change-h3)
    var changeh3Button = document.querySelector('#change-h3');
    var myHeading3 = document.querySelector('#h3');

    function changeHeadingThree () {
        var myPrompt = prompt("Enter new title for h3.");
        localStorage.setItem('h3name', myPrompt);
        myHeading3.textContent = "lovely " + myPrompt;
    }
    if(!localStorage.getItem('h3name')){
        changeHeadingThree();
    } else {
        var myStoredTitle = localStorage.getItem('h3name');
        myHeading3.append(' again thats ' + myStoredTitle);
    }
    changeh3Button.onclick = function () {
        changeHeadingThree();
    }
//////////////////////////////////////////////////////////////
//Changing h4(id=h4) text by clicking button(id=change-h4)

    var buttonH4 = document.querySelector('#change-h4');
    var heading4 = document.querySelector('#h4');

    var fruits = ['banana', 'apple', 'orange'];

    function changeHeadingFour () {
        var myHeading4 = prompt("Enter the heading4 title here.");
        localStorage.setItem('heading4', myHeading4);
        heading4.textContent = "Welcome to our newsite, " + myHeading4;
    }
    if(!localStorage.getItem('heading4')) {
        changeHeadingFour();
    } else {
        var storedHeading4 = localStorage.getItem('heading4');
        heading4.append(" hi again " + storedHeading4 + " .Do you want to have an " + fruits[1] + " pie?");

    }

    buttonH4.onclick = function () {
        changeHeadingFour();
    }

////////////////////////////////////////////////////////////////////////
//Writing random arrays
var day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
console.log(day[4]);

var buses = [53, '3g', 10];
console.log("i like bus number " + buses[1]);
//multidimensional arrays
var random = [1, 2, "tree", [0, 2, 35]];
console.log("my lucky number is " + random[3][2]);

var multi = ['hello', 'myname', 12, 'you', "sunny day", ['i love you', 'you love me', 32], 'yes'];
console.log(multi[0] + "I wanted to say that " + multi[5][0] + " and " +multi[6] + ', ' + multi[5][1]);
///Spliiting string to array with splitted substrings as array items
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
console.log("from string to array: " + myArray);
console.log(myArray.length);
console.log(myArray[3]);

var cities = 'Vilnius, Utena, Kaunas';
var arrayOfCities = cities.split(',');
console.log(arrayOfCities[0]+ ", " + arrayOfCities[1]+ ", " + arrayOfCities[2]);

var cars = 'Volvo, BMW, Mercedes, VW, Peaugeot';
var arrayOfCars = cars.split(',');
console.log("There are " + arrayOfCars.length + " species of cars, from which I like " + arrayOfCars[1] + " the most");

var professions = 'Doctor, Teacher, Policeman';
var arrayOfProfessions = professions.split(',');
console.log("Show one profession here: " + arrayOfProfessions[2]);

var children = "Pijus, Elze";
console.log("Children are: " + children.split(','));
//From array to a string 
var colors = ['red', 'brown', 'blue'];
console.log(colors.join(':')); //join(',') method requires one parameter(usually ,: etc), toString() method doesn;t require parameters

var dresses = ['yellow', 'green', 'black'];
console.log('I have 3 dresses: ' + dresses.toString());

var bicycles = ['mountain bike', 'city bike', 'super bike'];
console.log("Which bicycle u like the most? " + bicycles.toString() + "?");

var hair = ['blond', 'black', 'mahagony'];
console.log("Three types of hair color: " + hair.toString());

var metal = ['gold', 'silver', 'platinum'];
console.log("There are medals of these metals: " + metal.join(','));
///////////////////////////////////////////////////////////
//Adding elements to array by using push() method
var arrayyy = ['Volvo', 'Ferrari', 'Mercedes'];
var newArrayLength = arrayyy.push('BMW'); //returns how many elements array has (with added items already)
console.log(arrayyy);

var clothes = ['trousers', 'tshirts', 'dresses', 'blouses', 'jackets'];
clothes.push('skirts'); //adds new element to the end of the array
console.log(clothes + "Show added element to array: " + clothes[5]);

var seasons = ['autumn', 'winter', 'spring'];
seasons.push('summer');
console.log('Show all seasons: ' + seasons);

var instruments = ['violin', 'guitar', 'drums'];
instruments.push('piano', 'electric guitar');
console.log('Show all instruments: ' + instruments);

var food = ['bread', 'meat', 'eggs'];
food.push('milk');
console.log(food);

var meat = ['beef', 'lamb'];
meat.push('chicken');
console.log(meat);

var jewelry = ['bracelet', 'earrings'];
jewelry.push('ring');
console.log(jewelry);

var furniture = ['table', 'chair', 'bed', 'shelf'];
furniture.push('sofa');
console.log("Show all furnitures: " + furniture);

var timeofDay = ['morning', 'afternoon', 'evening'];
timeofDay.push('night');
console.log(timeofDay);

var phones = ['samsung', 'apple'];
phones.push('huawei');
console.log("Show all phones: " + phones);
/////////////////////////////////////////////////////////




   /* $('[name=temp]').keyup(function(){
    	var xyz = $(this).val();

    	$.ajax({
    		url:'calculate.php',
    		type: 'post',
    		data:{celsius: xyz},
    		success:function(abcd){
    			$('#temperature').html(abcd);
    		}
    	});
    });

    $('[name=word]').keyup(function(){
    	var xyz = $(this).val();

    	$.ajax({
    		url:'translate.php',
    		type: 'get',
    		data:{word: xyz},
    		success:function(abcd){
    			$('#translation').html(abcd);
    		}
    	});
    }); */

});