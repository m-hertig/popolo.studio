import * as $ from 'jquery';

var $popolo_texts = ["design","prototyping", "consulting", "space", "research", "education"];
var $popolo_texts_index = 0;
var intervalID;

// To avoid flash of unstyled content
$('html').addClass('hidden');
$(window).on('load', function () {
  $('html').removeClass('hidden');
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
