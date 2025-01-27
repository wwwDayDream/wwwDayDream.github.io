window.onload = function() {
	var current = window.location.href;
	var url = new URL(current);
	var modId = url.searchParams.get("id");
	var modVersion = url.searchParams.get("version");
	var modLaunchString = modId + "@" + modVersion;

	if (!modId || !modVersion) {
		document.getElementById("hidden-form").style.visibility = "visible"
		return;
	}
	window.location.href = "vintagestorymodinstall://" + modLaunchString;
};
function generateAndCopyLink() {
	const id = document.getElementById('ip').value;

	if (!id) {
		alert('Please enter a 1-click link.');
		return;
	}

	const withoutProtocol = id.replace("vintagestorymodinstall://");
	const split = withoutProtocol.split("@");
	if (split.length == 1) {
		alert('Please enter a valid 1-click link.')
		return;
	}
	var modId = [0]
	var modVersion = withoutProtocol.split("@")[1]

	const link = `https://wwwdaydream.github.io/vintagestorymodinstall?id=${encodeURIComponent(modId)}&version=${encodeURIComponent(modVersion)}`;
	navigator.clipboard.writeText(link).then(() => {
	}).catch(err => {
		console.error('Failed to copy:', err);
	});
}