var openedlist;
function dropfunc(clk) {
	openedlist = clk;
	document.getElementById(clk).classList.toggle("show");
	var ddownconts = document.getElementsByClassName("dropdown-content");

	// Loop through the elements and remove the specified class
	for (var i = 0; i < ddownconts.length; i++) {
		if (ddownconts[i].id != clk) {
			ddownconts[i].classList.remove("show");
		}
	}
	// console.log(openedlist);
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (event.target.matches(`.comingsoon`)) {
		alert(`COMING SOON..`);
	}
	if (!event.target.matches(".dropbtn")) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				console.log(`removed show`);
				openDropdown.classList.remove("show");
			}
		}
	}
};
