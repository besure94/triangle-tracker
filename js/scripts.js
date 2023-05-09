window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let equilateral = document.getElementById("equilateral");
	let isosceles = document.getElementById("isosceles");
	let scalene = document.getElementById("scalene");
	let none = document.getElementById("none");

	form.addEventListener("submit", function(event){
		const A = document.getElementById("A").value;
		const B = document.getElementById("B").value;
		const C = document.getElementById("C").value;

		equilateral.setAttribute("class", "hidden");
		isosceles.setAttribute("class", "hidden");
		scalene.setAttribute("class", "hidden");
		none.setAttribute("class", "hidden");
		event.preventDefault();

		if (A && B && C) {
			if (A === B && B === C) {
				document.getElementById("equilateral").removeAttribute("class");
			} else if (A === B && C !== B) {
					document.getElementById("isosceles").removeAttribute("class");
			} else if (A !== B || C !== B) {
					document.getElementById("scalene").removeAttribute("class");
			} else {
					document.getElementById("none").removeAttribute("class");
			}
		}
	});
});
