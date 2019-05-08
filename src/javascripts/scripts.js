import * as $ from 'jquery';

var $popolo_texts = ["design","prototyping", "consulting", "space", "research", "education"];
var $popolo_texts_index = 0;
var intervalID;

// To avoid flash of unstyled content
$('html').addClass('hidden');
$(window).on('load', function () {
  shuffleElements($('.team li') );
  $('html').removeClass('hidden');
 });

 $(".cta_button").click(function(){
   $(".contact-form").slideDown("fast");
 });

 $(".close").click(function(){
   $(".contact-form").slideUp("fast");
 });

 $( ".contact-form .form-wrapper" ).submit(function( event ) {
   if ( $( "input:first" ).val() == "" ) {
     $( ".validaton" ).text( "Please tell us your email address first" ).show();
     return;
   } else {
     var $email = $( ".contact_email" ).val();
     var $message = $( ".contact_message" ).val();
     console.log("email: "+$email);
     console.log("message: "+$message);
     $.post("http://martinhertig.ch/popolo/contactengine.php",{Email:$email, Message:$message},function(result){
       $(".contact-form .form-wrapper").fadeOut(300, function () {
         $('.contact-form .form-wrapper').html(result);
       });
       $(".contact-form .form-wrapper").fadeIn("300");
       return;
    });
    $(".contact-form .form-wrapper").fadeOut(300, function () {
      $('.contact-form .form-wrapper').html("Thank you for your message! You will hear from us soon.");
    });
    $(".contact-form .form-wrapper").fadeIn("300");
   }

   event.preventDefault();
 });


function nextText(){
    $('.popolo-variable').fadeOut(300, function () {
      $('.popolo-variable').html($popolo_texts[$popolo_texts_index]);
    });
    $('.popolo-variable').fadeIn(300);
    $popolo_texts_index++;
    if ($popolo_texts_index >= 6 ) {
      $popolo_texts_index = 0;
    }
}


$(".popolo-title").hover( function () {
  nextText();
  intervalID = setInterval(nextText, 1100);
    },
    function () {
      $('.popolo-variable').fadeOut(300, function () {
        $('.popolo-variable').html("studio");
      });
      $('.popolo-variable').fadeIn(300);
      window.clearInterval(intervalID);
} );

$(".button_joy").hover( function () {
  $(this).fadeOut(0, function () {
    $(this).html('how');
    $(".contact_message").html("Please bring me joy");
    setTimeout(function() {$(".contact_message").focus();},200);
  });
  $(this).fadeIn(100);
},function () {
  $(this).fadeOut(0, function () {
    $(this).html("joy");
  });
  $(this).fadeIn(100);
  window.clearInterval(intervalID);
});

$(".button_education").hover( function () {
  $(this).fadeOut(0, function () {
    $(this).html('yes please');
    $(".contact_message").attr("placeholder","I want to be educated");
  });
  $(this).fadeIn(100);
},function () {
  $(this).fadeOut(0, function () {
    $(this).html("education");
  });
  $(this).fadeIn(100);
  window.clearInterval(intervalID);
});



function shuffleElements($elements) {
	var i, index1, index2, temp_val;

	var count = $elements.length;
	var $parent = $elements.parent();
	var shuffled_array = [];


	// populate array of indexes
	for (i = 0; i < count; i++) {
		shuffled_array.push(i);
	}

	// shuffle indexes
	for (i = 0; i < count; i++) {
		index1 = (Math.random() * count) | 0;
		index2 = (Math.random() * count) | 0;

		temp_val = shuffled_array[index1];
		shuffled_array[index1] = shuffled_array[index2];
		shuffled_array[index2] = temp_val;
	}

	// apply random order to elements
	$elements.detach();
	for (i = 0; i < count; i++) {
		$parent.append( $elements.eq(shuffled_array[i]) );
	}
}
