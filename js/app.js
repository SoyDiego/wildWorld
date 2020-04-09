const iconMenu = document.querySelector(".showIcon");
const containerMenu = document.querySelector(".container-menu");

iconMenu.addEventListener("click", () => openCloseMenu());
containerMenu.addEventListener("click", () => openCloseMenu())

function openCloseMenu(){
    	if (document.querySelector(".iconMobile").classList.contains("fa-bars")) {
		document
			.querySelector(".iconMobile")
			.classList.replace("fa-bars", "fa-times-circle");
		containerMenu.style.left = "0";
	} else {
		document
			.querySelector(".iconMobile")
            .classList.replace("fa-times-circle", "fa-bars");
            containerMenu.style.left = "-480px";
	}
}