CloudFlare.define("termsinator", ["termsinator/config"], function(config) {	
	function setCookie(c_name,value,exdays) {
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
		document.cookie = c_name + "=" + c_value;
	}
	
	function getCookie(c_name) {
		var i,x,y,ARRcookies=document.cookie.split(";");
		for (i=0;i<ARRcookies.length;i++) {
			x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
			y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
			x=x.replace(/^\s+|\s+$/g,"");
			if (x==c_name) {
				return unescape(y);
			}
		}
	}	
	
	var cookieName = 'trmsntr-' + config.domain_id; //TODO: include hash of terms in name (for when they change)
	var termsCookie = getCookie(cookieName);
	
	if (!termsCookie) {
		var accepted = confirm(config.terms); //TODO: make this a pretty popover
		if (accepted) {
			setCookie(cookieName, 1, null);
		} else {
			window.location.href = "http://www.google.com"; //TODO: make this configurable?  what should happen??
		}
	}
});