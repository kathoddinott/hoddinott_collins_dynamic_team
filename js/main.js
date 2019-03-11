// Javascript Doc
(() => {

	console.log("Javascript is linked up");

	var theButtons = document.querySelectorAll('.Title');

	function toggleContent() {
		// Toggle Past Event Content
		console.log(this.id);
		document.getElementById("katContent").classList.remove("visible");
		document.getElementById("amieContent").classList.remove("visible");
		document.getElementById(this.id+"Content").classList.add("visible");	
	}

	theButtons.forEach(currentButton => currentButton.addEventListener('click', toggleContent));
})();
