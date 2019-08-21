// sticky navbar

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#mainHeader').addClass('sticky');
    } else {
        $('#mainHeader').removeClass('sticky');
    }
});

// LightGallery

$(document).ready(function() {
    $("#lightgallery1").lightGallery({
      selector: '.slide'
    });
});

// Switchery.js for beautiful checkbox

var elem = document.querySelector('.js-switch');
var init = new Switchery(elem, { disabled: true });

// inputmask

$(document).ready(function(){
  $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
});


// Filter aspects

// init Isotope
$('.rew-patients').hide();
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-nav').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  if ( filterValue == '.rew-patients' ) {
    $('.rew-patients').show();
  }
  $grid.isotope({ filter: filterValue });
});

// Filter mediaGallery

$('.btn-gallery').on('click', function(){
  const filterValue = $(this).attr('data-filter');
  $('.gallery-item').each(function(index, item){
    if($(item).hasClass(filterValue)){
      $(item).show();
    } else {
      $(item).hide();
    }
  });
});


// Active button in filter-nav

$('.btn-filter').on('click', function(){
    $('.btn-filter').removeClass('btn-active');
    $(this).addClass('btn-active');

});
