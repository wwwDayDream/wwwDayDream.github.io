window.onload = function() {
	var current = window.location.href;
	var url = new URL(current);
	var modId = url.searchParams.get("id");
	var modVersion = url.searchParams.get("version");
	var modLaunchString = decodeURIComponent(modId) + "@" + decodeURIComponent(modVersion);

	if (!modId || !modVersion) {
		document.getElementById("hidden-form").style.visibility = "visible"
		return;
	}
	window.location.href = "vintagestorymodinstall://" + modLaunchString;
};
function generateAndCopyLink(button) {
	const id = document.getElementById('id').value;
	const notification = document.getElementById('notification');

	if (!id) {
		alert('Please enter a 1-click link.');
		return;
	}

	const withoutProtocol = id.replace("vintagestorymodinstall://", "");
	const split = withoutProtocol.split("@");
	if (split.length == 1) {
		alert('Please enter a valid 1-click link.')
		return;
	}
	var modId = split[0]
	var modVersion = split[1]

	const link = `https://wwwdaydream.github.io/vintagestorymodinstall?id=${encodeURIComponent(modId)}&version=${encodeURIComponent(modVersion)}`;
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