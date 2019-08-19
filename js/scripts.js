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
