/*
* 2012
* Author - Mark Golubev
*/

var UserAgent = navigator.userAgent.toLowerCase();
var Device = {};
	Device.isiPhone = function() { return UserAgent.indexOf('iphone') > -1; };
	Device.isiPod = function() { return UserAgent.indexOf('ipod') > -1; };
	Device.isiPad = function() { return UserAgent.indexOf('ipad') > -1; };
	Device.isAndroid = function() { return UserAgent.indexOf('android') > -1; };

Device.isiOS = function() { return Device.isiPhone() || Device.isiPod() || Device.isiPad(); };
Device.isMobile = function() { return Device.isiOS() || Device.isAndroid(); };

var Browser = {};
	Browser.isIE7= function() { return $.browser.msie && $.browser.version == "7.0" };
	Browser.isIE8 = function() { return $.browser.msie && $.browser.version == "8.0" };
	Browser.isIE9 = function() { return $.browser.msie && $.browser.version == "9.0" };
	Browser.isIE = function() { return $.browser.msie };
	Browser.isWebkit = function() { return $.browser.webkit };
	Browser.isOpera = function() { return $.browser.opera };
	Browser.isMozilla = function() { return $.browser.mozilla };

//if ( Device.isiOS() ) {	alert( " Операционная система iOS " );}
//if ( Device.isAndroid() ) {	alert( " Операционная система Android " );}
//if ( Device.isMobile() ) {	alert( " Мобильная платформа " );} else {	alert( " Обычный браузер " );}
