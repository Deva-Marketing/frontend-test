/*jslint node:true, browser:true */
'use strict';

/* jQuery */
var $ = require('jquery');
window.$ = $;
window.jQuery = $;

/* Changing the opacity of the menu while scrolling */
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 603) {
        $('nav').css({ "background-color": "rgba(0, 0, 0, 1)" });
    } else {
        $('nav').css({ "background-color": "rgba(0, 0, 0, 0.7)" });
    }
});

/* Dropdown menu on click */
$("#drpDwn").click(function () {
    $('#drpDwn-menu').slideToggle("fast");
});

/* Mobile Menu */
$('#openMenu').click(function () {
    $('#overlay').css({ "height": "100%" });
    $('#closeMenu').css({ "display": "block" });
    $('#menu').css({ "display": "block" });
});

$('#closeMenu').click(function () {
    $('#overlay').css({ "height": "0%" });
    $('#closeMenu').css({ "display": "none" });
    $('#menu').css({ "display": "none" });
});

/* Fading the header contain for better outlook */
$(window).scroll(function () {
    var scrollTop, height;
    scrollTop = $(window).scrollTop();
    height = 400;
    $('.header-container').css({'opacity': ((height - scrollTop) / height)});
});

/* FAQ */

// Question handler
$('li.q').on('click', function () {
    $(this).next().slideToggle(200)
        .siblings('li.a').slideUp();
    $(this).find('img').toggle();
});


/* Testamonail Carousel */
$(function () {
    var items = 0;
    $('.testimonials li').hide().eq(items).show();

    function next() {
        $('.testimonials li:visible').delay(5000).fadeOut('slow', function () {
            $(this).appendTo('.testimonials ul');
            $('.testimonials li:first').fadeIn('slow', next);
        });
    }
    next();
});
