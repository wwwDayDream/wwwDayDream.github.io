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
	window.location.href = "vintagestoryjoin://" + ipPort;
};
function generateAndCopyLink(button) {
	const ip = document.getElementById('ip').value;
	const port = document.getElementById('port').value;
	const notification = document.getElementById('notification');

	if (!ip || !port) {
		alert('Please enter both IP and Port.');
		return;
	}

	const link = `https://wwwdaydream.github.io/vintagestoryjoin?ip=${ip}&port=${port}`;
	navigator.clipboard.writeText(link).then(() => {
		// Show notification
		notification.classList.add('visible');

		// Add animation to the button
		button.style.transform = 'scale(1.1)';
		setTimeout(() => {
			button.style.transform = 'scale(1)';
		}, 150);

		// Hide notification after a short delay
		setTimeout(() => {
			notification.classList.remove('visible');
		}, 1200);
	}).catch(err => {
		console.error('Failed to copy:', err);
	});
}