window.onload = function() {
	var current = window.location.href;
	var url = new URL(current);
	var ip = url.searchParams.get("ip");
	var port = url.searchParams.get("port");
	var ipPort = ip + ":" + port;

	if (!ip || !port) {
		document.getElementById("hidden-form").style.visibility = "visible"
		return;
	}
	window.location.href = "vintagestoryjoin://" + trim(ipPort);
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