const formulario = document.getElementById("login-button");
formulario.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);
    var url = 'http://localhost:5000/login';
    var data = {
        email: email,
        password: password
    };

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => alert('usuario o contrasenia incorrecta'))
    .then(response => location.href="home.html");
});



