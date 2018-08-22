$( document ).ready(function() {
    console.log( "ready!" );

    $("#btn").click(function(){
    	$('#modal1').show();
    });

    $('.btn-secondary').click(function(){
    	$('#modal1').fadeOut(300);
    });



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