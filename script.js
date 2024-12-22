const textarea = document.querySelector(".text");
	const total = document.querySelector(".total");
	const remain = document.querySelector(".remain");

	textarea.oninput = function (){
		total.innerHTML = "Total: " + textarea.value.length;
		remain.innerHTML = "Remaining: 50 - " + (50 - textarea.value.length);
	}