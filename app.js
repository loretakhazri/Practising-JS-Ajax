$( document ).ready(function() {
    console.log( "ready!" );

/////////////////////////////////////////////
//Practising if statements
 /* 
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
        var c = a +b;
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
/*var day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
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
//Add new element in the beginning of an array
var dogs = ['Bo', 'Mo', 'Lo', 'To'];
dogs.unshift('Jelly'); //if you print out this line, it will show the total number of elements in array with added items already
console.log("Show me the new first element of an array " + dogs[0]);

var animals = ['dogs', 'cats', 'mouses'];
animals.unshift('parrots');
animals.toString();
console.log('Shoe all the animals: ' + animals);


var paragraph = document.querySelector('.p1');
var drinks = ['coffee', 'tea'];
drinks.unshift('juice');
drinks.toString();
paragraph.append(' Would you like some drinks such as: ' + drinks + ' ? ');

var numbers = [2,23,1,7,6];
numbers.unshift(10);
console.log("Show me all the numbers: " + numbers);

var autos = ['Honda', 'Toyota', 'Volvo'];
autos.unshift('BMW');
console.log('Show me my dream car - ' + autos[0]);

var countries = ['Lithuania', 'Tunisia', 'Germany'];
countries.unshift('Netherlands');
console.log(countries);

var currencies = ['Tunisian dinar', 'Euro', 'Pound'];
currencies.unshift('American dollar');
console.log(currencies[0]);

var brands = ['Guci', 'Georgio Armani', 'MaxMara'];
brands.unshift('Prada');
console.log(brands[0]);

var americanCities = ['New Yor', 'Los Angeles'];
americanCities.unshift('San Francisco');
console.log('Have you ever been to ' + americanCities[0]);

var airports = ['Vilnius airport', 'Kaunas airport', 'Heathrow airport'];
airports.unshift('Carthage airport');
console.log('We will go to ' + airports[0]);
//////////////////////////////////////////////////////////////////////////
//Deleting first element of an array (shift() method) and last element(pop() method)

var colors1 = ['red', 'blue', 'green','brown', 'orange'];
var removedItemFromBeggining = colors1.shift();
var removedItemFromEnd = colors1.pop();
console.log('Removed from beginning: ' + removedItemFromBeggining + ' and removed from the end: ' + removedItemFromEnd);

var books = ['Rugiuose prie bedugnes', 'Raudonkepuraite', 'Skrydis virs gegutes lizdo', 'Diena, kai pradejau gyventi', 'Dievas visada keliauja incognito'];
var removedFirst = books.shift();
var removedLast = books.pop();
console.log('Removed first - ' + removedFirst + ' and removed last - ' + removedLast);

var milkProducts = ['milk', 'kefir', 'yoghurt', 'cheese', 'creme fresh'];
var removedBeg = milkProducts.shift();
var removedLas = milkProducts.pop();
console.log('Removed from beggining and end: ' + removedBeg + ', ' + removedLas);

var flowers = ['rose', 'lilac', 'sunflower'];
var remFirst = flowers.shift();
var remLast = flowers.pop();
console.log(remFirst + ' and ' + remLast);

var cats = ['Minus', 'Lulu', 'Chanel'];
var rem1 = cats.shift();
var remLasts = cats.pop();
console.log(rem1 + ' and ' + remLasts);
*/
///////////////////////////////////////////
//AJAX
    /*$('[name=temp]').keyup(function(){
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
    }); 
//////////////////////////////////////////////////////
//Searching the max number in array
//1
    var numbers = [1, 12, 121, 2, 3, 34, 68, 73];
    var max=0;

    for(var i=0; i<numbers.length; i++){
        if(numbers[i]>max){
            max= numbers[i];
        }
    }
     console.log("show me max number: " + max);
     console.log(Math.max(...numbers)); //special method for finding max value in the array
//2
    var nums = [3,4,5,19,28,37,46,57];
    var max = 0;
    for(var i = 0; i<nums.length; i++){
        if(nums[i]>max){
            max = nums[i];
        }
    }
    console.log('The max number is: ' + max);
    console.log(Math.max(...nums));

//3
    var arr = [1,6,34,56,124];
    var max = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    console.log("The max number of array " + max);
    console.log(Math.max(...arr));

//4
    var array = [12, 25, 37, 65, 78];
    var max = 0;
    for(var i = 0; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    console.log('This is the max number in array: ' + max);
    console.log(Math.max(...array));

//5
    var numberss = [1,2,3,4,5,6,7,8,9,10];
    var max = 0;
    for(var i = 0; i <numberss.length; i++){
        if(numberss[i]>max){
            max = numberss[i];
        }
    }
    console.log('This is the max number in array ' + max);
    console.log(Math.max(...numberss));

//6
    var a = [25,12,73,5,7];
    var max = 0;
    for(var i = 0; i<a.length; i++){
        if(a[i]>max){
            max = a[i];
        }
    }
    console.log('The biggest number is ' + max);
    console.log(Math.max(...a));

//7
    var b = [17, 35, 47, 83, 95];
    var max = 0;
    for(var i = 0; i<b.length; i++){
        if(b[i]>max){
            max = b[i];
        }
    }
    console.log('Biggest number: ' + max);
    console.log(Math.max(...b));
/////////////////////////////////////////////////
//Finding min number in an array

//1
 var abc = [12,2,3,47,56,7,8];
 var min = Infinity;
 for(var i = 0; i<abc.length; i++){
    if(abc[i]<min){
        min = abc[i];
    }
 }
 console.log('The min number in array is ' + min);
 console.log(Math.min(...abc));

 //2
 var vzz = [3,5,7,11,14];
 var min = Infinity;
 for(var i = 0; i<vzz.length; i++){
    if(vzz[i]<min){
        min = vzz[i];
    }
 }
 console.log('This is the min number: ' + min);

 //3
 var cde = [12,34,47,87,95];
 var min = Infinity;
 for(var i = 0; i < cde.length; i++){
    if(cde[i]<min){
        min = cde[i];
    }
 }
 console.log('Hello for min number ' + min);

 //4
 var arrA = [1,2,3,4,5,6,7,8,9,10,11];
 var min = Infinity;
 for(var i = 0; i < arrA.length; i++){
    if(arrA[i]< min){
        min = arrA[i];
    }
 }
 console.log('Min number ' + min);

 //5
 var la = [34,35,37,46,55];
 var min = Infinity;
 for(var i =0; i < la.length; i++){
    if(la[i] < min){
        min = la[i];
    }
 }
 console.log('Mininum number in the array is ' + min);

 //6

 var cha = [2,3,6,7,8];
 var min = Infinity;
 for(var i = 0; i<cha.length; i++){
    if(cha[i]<min){
        min = cha[i];
    }
 }
 console.log('Show min number: ' + min); 

 //7
var nmb = [21,14,37,65,78];
function myMin (x) {
         var min = Infinity;
         for(var i = 0; i < x.length; i++){
            if(x[i] < min) {
                min = x[i];
            }
         }
console.log('And the min number is ' + min);  
 }
myMin(nmb);


//8
var myNumbers = [12,14,16,17,18];

showMin(myNumbers);
function showMin (x) {
    var min = Infinity;
    for(var i = 0; i <x.length; i++){
        if(x[i] < min) {
            min = x[i];
        }
    }
    console.log('Show me the minimum number in the array: ' + min);
}

//9
var myNumbersArray = [1,2,3,4,5,6,7,8,9,10,11];
findMin(myNumbersArray);
function findMin (y){
    var min = Infinity;
    for(var i=0;i<y.length;i++){
        if(y[i]<min){
            min = y[i];
        }
    }
    console.log('Show min: ' + min);
}
*/

//10
var myArrayNumbers = [11,12,13,14,15,16,17,18,19,20];
$('#min').click(function (){
  findTheMinValue(myArrayNumbers);  
});

function findTheMinValue (array) {
    var min = Infinity;
    for(var i=0; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        }
    }
    console.log('The min number of array is ' + min);
} 

//11
var arra = [24,25,27,28,29];
$('#minNumber').on('click', function(){
    showMinNumber(arra);
    $('#minNumber').off('click');
});
function showMinNumber (x) {
    var min = Infinity;
    for(var i = 0; i < x.length; i++){
        if(x[i]<min){
            min = x[i];
        }
    }
    $('h1').append(' This is min number: ' + min);
}

//12
var sun = [12,14,17,25,37];
$('#number').on('click', function(){ //only once first time when u click on button it displays result
    showMin(sun);
    $('#number').off('click');
})
function showMin (y){
    var min = Infinity;
    for(var i = 0; i < y.length; i++){
        if(y[i]<min){
            min = y[i];
        }
    }
    $('h2').append(' The min number of this array is ' + min);
}

//13

var aha = [100,24,25,52,34];

$('#numberMin').on('click', function (){
    findMin(aha);
    $('#numberMin').off('click');
})
function findMin(z){
    var min = Infinity;
    for(var i = 0; i < z.length; i++){
        if(z[i]<min){
            min = z[i];
        }
    }
    $('h3').append(' Append min number of the array' + min);

}
////////////////////////////////////////////////////////
//Example of using while loop to countdown
var output = document.querySelector('.output');
output.innerHTML = '';

var i = 10;
while(i>=0){
    var para = document.createElement('p');
    if(i===10){
        para.textContent = "Countdown ten";
    } else if(i===0){
        para.textContent = "Blast off";
    } else {
        para.textContent = i;
    }

    i--;
    output.appendChild(para);
}

//////////////////////////////////////////////////////////////////////////////////////////
// Guest list (sort people array to admitted and refused groups usinf loop and conditional statement)

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// var i = 0;
// do {
//     if(people[i]==='Phil' || people[i]==='Lola'){
//          refused.textContent += people[i] + ', ';
//     }else {
//         admitted.textContent += people[i] + ', ';
//     }
//     i++;
// }while(i <people.length);
// admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';//The admitted.textContent.length-2 means the last element before the last ,(comma).
                                                                    // You slice from beginning of whole string till the element before last comma starts.
// refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';

for(var i = 0; i< people.length; i++){

    if(people[i]==='Phil' || people[i]==='Lola'){
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';
    }
}
refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';

/////////////////////////////////////////////////////////////////////////////////////////////
// Functions

var x = 5;
var z = 10;
function a () {
    var y = x + z; //local scope(only inside the function it is defined)  
    return y;
}
a();
function get(value){
    return "Good number is this: " + value;
}

var localVar = get(a());
console.log(localVar);


////////////////////////////////////////////////
function myBigFunction() {
  var myValue = 1;
      
  subFunction1(myValue); // if you want when these subfunctions would run, you have to pass var myValue to them as an parameter(only then variable it will be defined)
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
myBigFunction();
//////////////////////////////////////
//Adding to array searchInput values, when more than 5 - deleting the last item
var list = document.querySelector('.outputted ul');
var searchInput = document.querySelector('.outputted input');
var searchBtn = document.querySelector('.outputted button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {

  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
     myHistory.pop();

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
////////////////////////////////////////////////////
//Using function which returns any whole number between 0 and number(function's parameter)

function randomNumber(number){
    return Math.floor(Math.random()*number);
}
//1
var a = function (){
    return randomNumber(10);
}
console.log('Random number between 0 and 10: ' + a());

//2
var b = randomNumber(14);
console.log('Random number between 0 and 14: ' + b);

//3
var headingFour = document.querySelector('h4');
var butn = document.createElement('button');
butn.textContent = 'Show random number';
headingFour.appendChild(butn);

butn.onclick = function () {
    butn.append(' Another random number between 0 and 20: ' + randomNumber(20));
}
///////////////////////
var inputt = document.querySelector('#this-input');
var paragraph= document.querySelector('#input-value-change p');

inputt.onkeyup = function (){
    var number = inputt.value;

    function squared (number) {
        return number * number;
    }


    if(isNaN(number)){
        paragraph.textContent = ' Hey, you must write a number!';
    } else {
        paragraph.textContent = ' This numbers squared is equal to ' + squared(number)+ '.';
    }
}
//////////////////////////////////////////////////////////////////

var inputt2 = document.querySelector('#this-input2');
var paragraph2 = document.querySelector('#input-value-change2 p');

function cubed (numberr) {
    return numberr * numberr * numberr;
}

inputt2.onkeyup = function (){
    var number2 = inputt2.value;
    if(isNaN(number2)) {
        paragraph2.textContent = 'Error. You must write a number here.';
    } else {
        paragraph2.textContent = number2 + ' . Its cubed is equal to ' + cubed(number2);
    }
}
///////////////////////////////////////////////////////////////////
var color = document.querySelector('#color');
function rnd(number){
    return Math.floor(Math.random()*(number+1));
}
 color.onclick = function(){
    var rndColor = 'rgb('+rnd(255)+', '+rnd(255)+', '+rnd(255)+')';
    document.body.style.backgroundColor = rndColor;
 }

////////////////////////////////////////////////////////////////////
var voila = document.querySelector('.voila');
voila.addEventListener('click', function (){
    voila.style.backgroundColor = 'red';
});
voila.addEventListener('click', function (){
    voila.append(cubed(3));
});
///////////////////////////////////////////
var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('#p');

form.onsubmit = function(e){
    if(fname.value==='' || lname.value===''){
        e.preventDefault();
        para.textContent = 'You must fill in both names!';
    }
}


});