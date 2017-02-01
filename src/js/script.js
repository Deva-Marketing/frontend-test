/*jslint node:true, browser:true */
'use strict';

/* jQuery */
var $ = require('jquery');

window.$ = $;
window.jQuery = $;

$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
    function () {
        $('ul', this).stop().slideDown(300);
    },
    function () {
        $('ul', this).stop().slideUp(300);
    }
);

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