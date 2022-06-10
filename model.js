// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modal1 = document.querySelector('#my-modal1');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

function openModal1() {
  modal1.style.display = 'block';
}
// Close
function closeModal() {
  modal.style.display = 'none';
}

function closeModal1() {
  modal1.style.display = 'none';
}
// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
