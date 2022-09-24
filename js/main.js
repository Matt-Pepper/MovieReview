function updateFooterDate() {
	const date = new Date();
	const footerYear = date.getFullYear();
	const footerSpan = document.getElementById("footerYear");
	footerSpan.innerText = footerYear;
}

// Ran after page is fully loaded, to prevent trying to edit DOM elements that arent created yet

window.addEventListener("load", () => {
	updateFooterDate();
});
