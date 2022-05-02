

page = 'first';



function formContinue(e){
    e.preventDefault();
    if (page == 'first'){
       let info = true;
        for (i=0; i<4;i++){
            if (document.getElementsByClassName('input')[i].value.length == ''){
                info = false;
                showAlert("error");
                break;
            }
        }
        if (info == true){
         document.getElementById('first-infos').style.display = 'none';
         document.getElementById('second-infos').style.display = 'block';
         page = 'second';
        }
     
    }else if (page == 'second'){

        let info = true;
        for (i=4; i<8;i++){
            if (document.getElementsByClassName('input')[i].value.length == ''){
                info = false;
                showAlert("error");
                break;
            }
        }
        if (info == true){
            document.getElementById('second-infos').style.display = 'none';
            document.getElementById('adress').style.display = 'block';
            document.getElementsByClassName('info-register')[0].innerHTML = 'Endereço'
            document.getElementsByClassName('small-info')[0].innerHTML = 'Endereço'
            page = 'adress';
        }

        
     
    }else if (page == 'adress'){
        let info = true;
        let adress = true;
         for (i=8; i<10;i++){
             if (document.getElementsByClassName('input')[i].value.length == ''){
                 info = false;
             showAlert("error");
                break;
             }
        }

        for (i=0; i<4;i++){
            if (document.getElementsByClassName('input-adress')[i].value.length == ''){
                adress = false;
                showAlert("error");
                break;
            }
        }
        if (info == true && adress == true){
            if (document.querySelector("#flexCheckDefault").checked == false){
                showAlert("warning");
            }else{
                page=""
                
            }
           
        }
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
    }else if (page == 'adress'){
        document.getElementById('adress').style.display = 'none';
        document.getElementById('second-infos').style.display = 'block';
        document.getElementsByClassName('info-register')[0].innerHTML = 'Preencha com suas informações pessoais'
        document.getElementsByClassName('small-info')[0].innerHTML = 'Preencha com suas informações pessoais'
        page = 'second'

    }
}





document.getElementById('continue').addEventListener('click', formContinue);
document.getElementById('return').addEventListener('click',returnPage);