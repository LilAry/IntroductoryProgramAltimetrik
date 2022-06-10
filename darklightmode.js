//Save preferences,storing locally
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#chk');

//if its enabled, turn it off
const enableDarkMode = () => {
	//add the class darkmode to the body
	document.body.classList.add('darkmode');
	//update the localStorage
	localStorage.setItem('darkMode', 'enabled');
};
//if its disabled, turn it on
const disableDarkMode = () => {
	//remove the class darkmode to the body
	document.body.classList.remove('darkmode');
	//update the localStorage
	localStorage.setItem('darkMode', null);
};

//Event Listener
//check if darkmode is enabled
darkModeToggle.addEventListener('click', () => {
	//update the localStorage
	darkMode = localStorage.getItem('darkMode');
	if(darkMode === 'enabled') {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
	// document.querySelector("body").classList.toggle("dark-theme");
});