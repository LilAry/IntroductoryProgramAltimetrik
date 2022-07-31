//show password
document.querySelector('.imgpassDontshow').addEventListener('click', (e) => {
    const input = document.querySelector('#password');
    const passwordShow = document.querySelector('.imgpassShow');
    if (e.target.classList.contains('imgpassDontshow')) {
        e.target.style.display = 'none';
        passwordShow.style.display = 'block';
        input.setAttribute('type','text');
    }
    else{
        passwordShow.style.display = 'none';
        e.target.style.display = 'block';
        input.setAttribute('type', 'password');
    }
});
document.querySelector('.imgpassShow').addEventListener('click', (e) => {
    const input = document.querySelector('#password');
    const passwordShow = document.querySelector('.imgpassDontshow');
    if (e.target.classList.contains('imgpassShow')){
        e.target.style.display = 'none';
        passwordShow.style.display = 'block';
        input.setAttribute('type', 'password');
    }
    else{
            e.target.style.display = 'none';
            passwordShow.style.display = 'block';
            input.setAttribute('type','text');
    }
});
