// ==UserScript==
// @name        youtube watched videos hider
// @author      ibtisam midlet
// @namespace   youtube-watched-videos-hider-userscript-bystorebitid@gmail.com
// @icon        https://github.com/ibtisammidlet/youtube-watched-videos-hider/raw/master/screenshot.png
// @include     *.youtube.com/*
// @description like the name
// @version     1.0
// @updateURL
// @downloadURL
// @supportURL  https://rebrand.ly/wanna-me
// @date        2019-05-05
// @homepage    
// @license     do what the fuck you want to do public license >>http://www.wtfpl.net/about/
// @require     https://code.jquery.com/jquery-3.4.0.min.js
// @grant       GM_addStyle
// ==/UserScript==



if (window.location.href.indexOf('youtube.com/playlist?list=') != -1) {
$(document).bind('DOMNodeInserted', function(e) {
    var element = e.target;
    setTimeout(function() {
        console.log("script excuted");
        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().parent().hide();
    }, 0);
});

} else {


$(document).bind('DOMNodeInserted', function(e) {
    var element = e.target;
    setTimeout(function() {
        console.log("else");
        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().hide();
    }, 0);
});

}
