//show password
document.querySelector('.password img').addEventListener('click', e => {
    const input = document.querySelector('.password input');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        input.setAttribute('type', 'text');
    }
    else {
        e.target.classList.add('show');
        input.setAttribute('type', 'password');
    }
});
