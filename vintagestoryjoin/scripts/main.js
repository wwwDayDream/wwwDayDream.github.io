window.onload = function() {
	var current = window.location.href;
	var url = new URL(current);
	var ipPort = url.searchParams.get("ip") + ":" + url.searchParams.get("port");
	window.location.href = "vintagestoryjoin://" + ipPort;
};