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
