const formulario = document.getElementById("login-button");
formulario.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var url = 'http://localhost:5000/login';
    var data = {
        email: email,
        password: password
    };
    let statusCode =null;

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => {
        statusCode=res.status;
        return res.json();
    })
    .then(response =>{ 
        if(statusCode==200){
            localStorage.setItem("user",response.user.firstname);
            localStorage.setItem("token",response.accessToken);
            location.href="home.html";
        }
        else{
            alert("User not found or password incorrect!");
        }
        })
    .catch(error => alert("Internal Server Error"))
    
});



