$(document).ready( function() {
	if($.browser.msie && $.browser.version == "6.0") {
		var ErrorMessage = "<div><p>Ваш браузер устарел. В связи с этим сайт может отображаться некорректно. Пожалуйста, <a href='http://windows.microsoft.com/ru-RU/internet-explorer/downloads/ie'>обновите Ваш браузер</a>, или установите альтернативный: <a href='http://www.google.com/chrome'>Google Chrome</a>, <a href='http://www.mozilla.com/ru/firefox/'>Mozilla FireFox</a>, <a href='http://opera.ru/'>Opera</a>.&nbsp;&nbsp;&nbsp;<a href=\"#\" class=\"close\">&nbsp;×&nbsp;</a></p>";
		$(ErrorMessage)
		.css({
			background: "#ff9",
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			padding: "10px 0",
			"font-size": "12px",
			"text-align": "center",
			"z-index": 6000,
			"border-bottom": "1px solid #aa0"
		})
		.appendTo("body")
		.find(".close")
		.css({
			position: "absolute",
			top: "4px",
			"right": "24px",
			"color": "#000",
			"font-size": "14px",
			"text-decoration": "none",
			"z-index": "6001"
			})
		.click( function() {
			$(this).closest("div").hide();
			return false;
		});
	}
});


