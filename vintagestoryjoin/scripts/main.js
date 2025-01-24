window.onload = function() {
	var current = window.location.href;
	var url = new URL(current);
	var ipPort = url.searchParams.get("ip") + ":" + url.searchParams.get("port");

	if (ipPort.length <= 1) {
		document.getElementsByClassName("form-container").style.visibility = "visible"
	}
	window.location.href = "vintagestoryjoin://" + ipPort;
	setTimeout(() => {
		window.close();
	}, 100);
};
function generateAndCopyLink() {
	const ip = document.getElementById('ip').value;
	const port = document.getElementById('port').value;

	if (!ip || !port) {
		alert('Please enter both IP and Port.');
		return;
	}

	const link = `https://wwwdaydream.github.io/vintagestoryjoin?ip=${ip}&port=${port}`;
	navigator.clipboard.writeText(link).then(() => {
	}).catch(err => {
		console.error('Failed to copy:', err);
	});
}