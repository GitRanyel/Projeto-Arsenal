

function backToLogin(){
    window.open("/pages/login-page/index.html", target="_self");
}
function sucessReset(event){
    event.preventDefault();
    showAlert("sucessPass");

    setTimeout(() => {
        window.open("/pages/login-page/index.html", target="_self");
    }, "1000")
 
}


document.querySelector("#return").addEventListener('click', backToLogin);
document.querySelector(".formulario").addEventListener('submit', sucessReset);
