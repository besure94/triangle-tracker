window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let resetBtn = document.getElementById("reset");
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
			if (A === B && B === A && B === C) {
				document.getElementById("equilateral").removeAttribute("class");
			} else if (A === B && B === A && C !== B) {
					document.getElementById("isosceles").removeAttribute("class");
			} else if (A !== B || C !== B) {
					document.getElementById("scalene").removeAttribute("class");
			} else {

			}
		}
	});

	form.addEventListener("submit", function() {
		resetBtn.removeAttribute("class");
	});

	resetBtn.addEventListener("click", function(){
		equilateral.setAttribute("class", "hidden");
		isosceles.setAttribute("class", "hidden");
		scalene.setAttribute("class", "hidden");
		none.setAttribute("class", "hidden");
		document.getElementById("A").value = null;
		document.getElementById("B").value = null;
		document.getElementById("C").value = null;
	});
});
