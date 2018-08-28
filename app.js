$( document ).ready(function() {
    console.log( "ready!" );
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

// Usage
var myEfficientFn = debounce(function() {
    // All the taxing stuff you do
}, 250);
window.addEventListener('resize', myEfficientFn);

    $("#btn").click(function(){
    	$('#modal1').show();
    });
//function to click
    $('.btn-secondary').click(function(){
    	$('#modal1').fadeOut(300);
    });

// function taggle

    $('.toggle').click(function(){
    	$('.image').toggle();

    });

    $('[name=temp]').keyup(function(){
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

});