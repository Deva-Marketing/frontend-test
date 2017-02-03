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

/* Fading the header contain for better outlook */
$(window).scroll(function () {
    var scrollTop, height;
    scrollTop = $(window).scrollTop();
    height = 400;
    $('.header-container').css({'opacity': ((height - scrollTop) / height)});
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