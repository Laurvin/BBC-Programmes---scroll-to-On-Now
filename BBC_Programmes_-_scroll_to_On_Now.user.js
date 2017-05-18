// ==UserScript==
// @name        BBC Programmes - scroll to On Now
// @icon        http://i.imgur.com/XYzKXzK.png
// @namespace   DB
// @version     0.2
// @description After loading the page scrolls the page to the program currently on.
// @include     http://www.bbc.co.uk/*/programmes/schedules/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant       none
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function ()
{
  $('html, body').animate(
    {
        scrollTop: $("#on-now").offset().top
    }, 500);
});
