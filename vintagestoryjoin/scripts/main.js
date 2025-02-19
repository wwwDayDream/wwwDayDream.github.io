window.onload = function() {
	var current = window.location.href;
	var url = new URL(current);
	var port = url.searchParams.get("port");
	var hostname = url.searchParams.get("host");

	if (!hostname) {
		document.getElementById("hidden-form").style.visibility = "visible"
		return;
	}
	window.location.href = "vintagestoryjoin://" + hostname + (!port ? "" : ":" + port);
};
function generateAndCopyLink(button) {
	const host = document.getElementById('host').value;
	const port = document.getElementById('port').value;
	const notification = document.getElementById('notification');

	if (!host) {
		alert('Please enter at least a host.');
		return;
	}

	const link = `https://wwwdaydream.github.io/vintagestoryjoin?host=${ip}&port=${port}`;
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