const navBar = document.querySelector('.navbarButton');
const navBarLinks = document.querySelector('.navbar-links');
const closeNB = document.querySelector('.crossNB');

navBar.addEventListener('click',OpenNavBar);
closeNB.addEventListener('click',CloseNavBar);

function OpenNavBar(){
    navBarLinks.style.display = 'block';
}
function CloseNavBar(){
    navBarLinks.style.display = 'none';
}