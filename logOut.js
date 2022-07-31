const logOutt = document.querySelector(".logOutt");
const logOutt2 = document.querySelector("#logOutt");
logOutt.addEventListener("click", SesionLogout);
logOutt2.addEventListener("click", SesionLogout);

function SesionLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    location.href="login.html";
}
