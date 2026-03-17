document.querySelectorAll("nav a").forEach(link => {

	link.addEventListener("click", function(e){

		e.preventDefault();

		const sectionId = this.getAttribute("href");
		const section = document.querySelector(sectionId);

		section.scrollIntoView({
			behavior: "smooth"
		});

	});

});