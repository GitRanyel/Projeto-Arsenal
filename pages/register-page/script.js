

page = 'first';


function formContinue(e){
    e.preventDefault();
    if (page == 'first'){
        document.getElementById('first-infos').style.display = 'none';
        document.getElementById('second-infos').style.display = 'block';
        page = 'second';
    }
}
function returnPage(e){
    e.preventDefault();
    if (page == 'first'){
        window.open("../login-page/index.html","_self")
    }else if (page == 'second'){
        document.getElementById('first-infos').style.display = 'block';
        document.getElementById('second-infos').style.display = 'none';
        page = 'first';
    }
}

document.getElementById('continue').addEventListener('click', formContinue);
document.getElementById('return').addEventListener('click',returnPage);