import * as $ from 'jquery';

var $popolo_texts = ["design","prototyping", "consulting", "space", "research", "education"];
var $popolo_colors = ["popolo-pink","popolo-green","popolo-yellow",,"popolo-violet","popolo-blue"];
var $popolo_texts_index = 0;
var $popolo_colors_index = 0;
var intervalID;

// To avoid flash of unstyled content
$('html').addClass('hidden');
$(window).on('load', function () {
  defineTimeColor();
  shuffleElements($('.team li') );
  $('html').removeClass('hidden');
 });

// Detect if it is a touch device
 window.addEventListener('touchstart', function onFirstTouch() {

  // set some global variable
  window.USER_IS_TOUCHING = true;

  // we only need to know once that a human touched the screen, so we can stop listening now
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

 $(".close").click(function(){

   if ($('header').width() > 600 ){
   $(".contact-form").slideUp("fast");
   } else {
     $(".contact-form").hide("fast");
   }
 });

 $( ".contact-form .form-wrapper" ).submit(function( event ) {
   if ( $( "input:first" ).val() === "" ) {
     event.preventDefault();
     $( ".validaton" ).text( "Please tell us your email address first" ).show();
     return;
    }
   // else {
   //   var email = $( ".contact_email" ).val();
   //   var message = $( ".contact_message" ).val();
   //   console.log("email: "+email);
   //   console.log("message: "+message);
   //   $.post("http://martinhertig.ch/popolo/contactengine.php",{Email:email, Message:message},function(result){
   //     $(".contact-form .form-wrapper").fadeOut(300, function () {
   //       $('.contact-form .form-wrapper').html(result);
   //     });
   //     $(".contact-form .form-wrapper").fadeIn("300");
   //     return;
   //  });
   //  $(".contact-form .form-wrapper").fadeOut(300, function () {
   //    $('.contact-form .form-wrapper').html("Thank you for your message! You will hear from us soon.");
   //  });
   //  $(".contact-form .form-wrapper").fadeIn("300");
   // }

   //event.preventDefault();
 });


function nextText(){
    $('.popolo-variable').fadeOut(300, function () {
      $('.popolo-variable').html($popolo_texts[$popolo_texts_index]);
    });
    $('.popolo-variable').fadeIn(300);
    //$('body').attr( "class", $popolo_colors[$popolo_colors_index] );

    // $popolo_colors_index++;
    // if ($popolo_colors_index >= 5 ) {
    //   $popolo_colors_index = 0;
    // }

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
      // $('.popolo-variable').fadeOut(300, function () {
      //   $('.popolo-variable').html("studio");
      // });
      // $('.popolo-variable').fadeIn(300);
    window.clearInterval(intervalID);
 }
);

  $(".cta_button").hover( function () {
    if (!window.USER_IS_TOUCHING) {
      $(this).children(".btn_label").addClass("invisible");
      $(this).children(".btn_hidden").show();
    }
  },function () {
    if (!window.USER_IS_TOUCHING) {
      $(this).children(".btn_hidden").hide();
      $(this).children(".btn_label").removeClass("invisible");
    }
  });


function defineTimeColor() {
	var today = new Date();
  var time = today.getHours();
  console.log("time: "+time);
  if (time >= 4 && time < 10) {
    $('body').attr( "class", "popolo-blue" );
  } else if (time < 16) {
    $('body').attr( "class", "popolo-pink" );
  } else if ( time < 22) {
    $('body').attr( "class", "popolo-green" );
  } else if ( time >= 22 || time < 4) {
    $('body').attr( "class", "popolo-violet" );
  }
}

$(".button_joy").click(function(){
  openContactForm("Hi, please bring me joy");
});
$(".button_education").click(function(){
  openContactForm("I want to be educated");
});
$(".button_social").click(function(){
  openContactForm("Dear popolo, I need a social encounter");
});
$(".button_happy").click(function(){
  openContactForm("Lets get together and feel alright");
});
$(".button_calm").click(function(){
  openContactForm("Hi, I'm stressed out");
});

function openContactForm($text) {
  console.log("contact form");
  $(".contact_message").html($text);
  if ($('header').width() > 600 ){
    $(".contact-form").slideDown("fast");
    $('#contact_message').focus();
  } else {
    $(".contact-form").fadeIn("fast");
  }
}



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
