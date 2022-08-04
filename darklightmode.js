//Save preferences,storing locally
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#chk');
const darkModeToggle2 = document.querySelector('#chk2');
const labelBL = document.querySelector('#labelBL');
const ball = document.querySelector('.ball');


const enableDarkMode = () => {
	ball.style.transform = "translateX(-22px)";
	labelBL.style.backgroundColor= "#E1E1E4";
	document.body.classList.add('darkmode');
	//update the localStorage
	localStorage.setItem('darkMode','enabled');
};

const disableDarkMode = () => {
	ball.style.transform = "translateX(0px)";
	labelBL.style.backgroundColor= "#5F81FB";
	document.body.classList.remove('darkmode');
	//update the localStorage
	localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
	enableDarkMode();
  }

//Event Listener
darkModeToggle.addEventListener('click', () => {
	//update the localStorage
	darkMode = localStorage.getItem('darkMode');
	if(darkMode === 'enabled') {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});

