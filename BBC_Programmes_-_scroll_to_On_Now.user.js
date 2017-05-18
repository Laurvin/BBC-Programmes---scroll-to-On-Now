// ==UserScript==
// @name BBC Programmes - scroll to On Now
// @namespace BBC Programmes - scroll to On Now
// @author Laurvin
// @description Scrolls the BBC TV Schedule pages to the programme currently on.
// @version 0.2
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/BBC-Programmes---scroll-to-On-Now/raw/master/BBC_Programmes_-_scroll_to_On_Now.user.js
// @include http://www.bbc.co.uk/*/programmes/schedules/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant none
// @run-at document-idle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function ()
{
  $('html, body').animate(
    {
        scrollTop: $("#on-now").offset().top
    }, 500);
});
