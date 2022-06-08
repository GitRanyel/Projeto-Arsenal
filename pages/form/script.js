


function nextQuestion(){
  
    let options = document.querySelector('#level').value.toLowerCase()
    let local = document.querySelector('#local')
  
    document.querySelector('#carouselExampleInterval').style.display = 'none'


    switch (options) {
        case "ideação":
         local.innerHTML = `
         <div>
                <label class="label-question mt-4">Você sabe dizer se sua ideia resolve um problema real do mercado?</label>

                <div>
                    <input type="radio" name="idea" id="opc1" onclick="next(nextStep)">
                    <label for="opc1"  class="answer">Sim, e posso provar!</label>
                    <input type="radio" name="idea" id="opc2" onclick="next(notOne)">
                    <label for="opc2" class="answer">Não!</label>
                </div>             
         </div>`
        break;

        case "prototipo":
            nextIdea();
        break;
        case "mvp":
            document.querySelector("#teste").style.display = 'none'
            local.innerHTML = `
            <div class="div-wid">
                <img src="images/cancel.svg" class="cancel-img">
                <div class="label-question mt-4">
                    Ops… Você está em um nível mais avançado, que ainda não estamos trabalhando! Parabéns! Não é fácil chegar a essa fase, ein? Que tal rever algumas etapas iniciais e revisar se não tem nenhum ajuste no seu negócio que pode ser feito? =D  
                    <div>
                    <button class="button-back mt-3" onclick="backForm()">Voltar</button>
                    </div> 
                </div>    
                 
          
            </div>`
        break;
        case "operacao":
            document.querySelector("#teste").style.display = 'none'
            local.innerHTML = `
            <div class="div-wid">
            <img src="images/cancel.svg" class="cancel-img">
            <div class="label-question mt-4">
                Ops… Você está em um nível mais avançado, estamos trabalhando para criar conteúdos que se adeque a sua necessidade nesse momento, assim que tivermos uma trilha como esta disponível, entraremos em contato! 
                <div>
                    <button class="button-back mt-3" onclick="backForm()">Voltar</button>
                </div> 
            </div>     
            </div>`
        break;
        case "tracao":
            document.querySelector("#teste").style.display = 'none'
            local.innerHTML = `
            <div class="div-wid">
                <img src="images/cancel.svg" class="cancel-img">
                <div class="label-question mt-4">
                    Ops… Você está em um nível mais avançado, estamos trabalhando para criar conteúdos que se adeque a sua necessidade nesse momento, assim que tivermos uma trilha como esta disponível, entraremos em contato! 
                    <div>
                        <button class="button-back mt-3"  onclick="backForm()">Voltar</button>
                    </div> 
                </div>          
            </div>`
        break;
        case "escala":
            document.querySelector("#teste").style.display = 'none'
            local.innerHTML = `
            <div class="div-wid">
            <img src="images/cancel.svg" class="cancel-img">
                <div class="label-question mt-4">
                    Ops… Você está em um nível mais avançado, que ainda não estamos trabalhando! Parabéns! Não é fácil chegar a essa fase, ein? Que tal rever algumas etapas iniciais e revisar se não tem nenhum ajuste no seu negócio que pode ser feito? =D  
                    <div>
                    <button class="button-back mt-3" onclick="backForm()">Voltar</button>
                    </div> 
            </div>            
            </div>`
        break;
        case "none":
            local.innerHTML = `
            <div>
                   <label class="label-question mt-4">Você já identificou um problema/desafio que quer resolver?</label>
   
                   <div>
                       <input type="radio" name="idea" id="opc1" onclick="next(notOne)">
                       <label for="opc1"  class="answer">Sim!</label>
                       <input type="radio" name="idea" id="opc2" onclick="next(showTrail,'discProblem')">
                       <label for="opc2" class="answer">Não!</label>
                   </div>             
            </div>`
          break;
      }

    
}
function backForm(){
    document.querySelector('#carouselExampleInterval').style.display = 'block';
    document.querySelector("#teste").style.display = 'block';
            
    local.innerHTML = '';
    
}


function next(func,trail){

    setTimeout( function () {
        if(trail){
            func(trail)
        }else{
            func()
        }
    },500)

}



function notOne(){

    
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Qual tamanho do problema/desafio?</label>

           <div>
            <select name="" class="select mt-2" onChange="problem(value)">
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="over100">Impacta menos de cem pessoas</option>
                <option value="centenas">Impacta centenas pessoas</option>
                <option value="milhares">Impacta milhares de pessoas</option>
                <option value="bilhoes">Impacta bilhões de pessoas</option>
          
            </select>

           </div>

          
    </div>`
}
function problem(value){
   if  (value == 'over100') {

        next(showTrail, 'discProblem')
   } else{
        setTimeout( function () {
            local.innerHTML = `
            <div>
                   <label class="label-question mt-4"> Você tem dados de fontes seguras que comprovam a relevância desse problema ou desafio?</label>
    
                   <div>
                       <input type="radio" name="idea" id="opc1" onclick="next(searchProblem)">
                       <label for="opc1"  class="answer">Sim!</label>
                       <input type="radio" name="idea" id="opc2" onclick="next(showTrail,'discProblem')">
                       <label for="opc2" class="answer">Não!</label>
                       <input type="radio" name="idea" id="opc3" onclick="next(showTrail, 'discProblem')">
                       <label for="opc3" class="answer">Não tenho certeza!</label>
                   </div>             
            </div>`
        },500)
   }
}




function searchProblem(){

    
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você já consolidou esses dados sobre o desafio/problema da sua ideia, realizou pesquisas e entrevistou pessoas impactadas por ele?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(stepSolution)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="no"  onclick="next(showTrail,'discProblem')">
               <label for="no" class="answer">Não!</label>
               <input type="radio" name="idea" id="opc3"  onclick="next(showTrail,'discProblem')">
               <label for="opc3" class="answer">Não tenho certeza!</label>
           </div>

          
    </div>`
}
function stepSolution(){

    
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você já tem uma ideia de solução para esse desafio/problema?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(showTrail, 'valiIdea')">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="no"  onclick="next(showTrail, 'ideacao')">
               <label for="no" class="answer">Não!</label>
           </div>

          
    </div>`
}




function nextStep(){

    
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você já definiu seu segmento de cliente que sente esse problema?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(stepPerson)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="no"  onclick="next(showTrail, 'tPersona')">
               <label for="no" class="answer">Não!</label>
           </div>

          
    </div>`
}


function stepPerson(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você já desenvolveu uma persona que represente esse segmento de cliente?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(nextIdea)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(showTrail, 'tPersona')">
               <label for="not" class="answer">Não!</label>
           </div>         
    </div>`
}

function nextIdea(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você já tem uma proposta de valor para essa persona usar sua ideia?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(nextValue)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(showTrail, 'pValor')">
               <label for="not" class="answer">Não!</label>
           </div>           
    </div>`
}
function nextValue(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você já consegue desenhar um esboço da solução, pensando em funcionalidades dessa ideia?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(nextProt)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(showTrail, 'prototipacao')">
               <label for="not" class="answer">Não!</label>
           </div>      
    </div>`
}
function nextProt(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você considera que já possui um protótipo?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(nextMV)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(showTrail, 'prototipacao')">
               <label for="not" class="answer">Não!</label>
           </div>             
    </div>`
}
function nextMV(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Esse protótipo já pode ser comercializado?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(next2)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(showTrail, 'mvp')">
               <label for="not" class="answer">Não!</label>
           </div>            
    </div>`
}
function next2(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Você conseguiu validar a sua ideia de produto/serviço final com ele?</label>

           <div>
               <input type="radio" name="idea" id=problema"yes"  onclick="next(next3)">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(showTrail, 'validacao')">
               <label for="not" class="answer">Não!</label>
           </div>             
    </div>`
}


function next3(){
    local.innerHTML = `
    <div>
           <label class="label-question mt-4">Já existem algumas funcionalidades no produto/serviço?</label>

           <div>
               <input type="radio" name="idea" id="yes"  onclick="next(showTrail, 'produto')">
               <label for="yes"  class="answer">Sim!</label>
               <input type="radio" name="idea" id="not"  onclick="next(next3)">
               <label for="not" class="answer">Não!</label>
           </div>          
    </div>`
}




function showTrail(trilha){
    document.getElementsByClassName('wrap')[0].style.display = 'none'
   document.querySelector('#result').style.display = 'flex'
   document.querySelector('.question').innerText = 'Resultado do Questionário Inicial'
   document.querySelector('.question').style.paddingLeft = '20px'

   let trail = document.querySelector('.trail')
   let desc = document.querySelector('.desc')
    if (trilha == "tPersona"){
        trail.innerHTML = "Trilha a partir da Persona"
        desc.innerHTML = 'Persona é a representação fictícia do cliente ideal de um negócio. É baseada em dados reais sobre comportamento e características demográficas dos clientes, assim como histórias pessoais, motivações, objetivos, desafios e preocupações. A persona guia a criação de conteúdo e de Marketing Digital.'
    }else if (trilha == "pValor"){
        trail.innerHTML = "Trilha a partir da Proposta de Valor"
        desc.innerHTML = 'A proposta de valor nada mais é que uma prática que visa levar ao seu potencial cliente uma ideia concisa, clara e transparente a respeito de como determinado produto ou serviço será relevante para ele. Definir essa ideia é essencial para iniciar um novo negócio.'
    }else if (trilha == "prototipacao"){
        trail.innerHTML = "Trilha a partir da Prototipação"
        desc.innerHTML = 'A prototipação é uma forma de visualizar a sua ideia antes mesmo de tirá-la do papel. Ela é de extrema importância para startups, uma vez que evita maiores gastos no desenvolvimento.'
    
    }else if (trilha == "mvp"){
        trail.innerHTML = "Trilha a partir de MVP"
        desc.innerHTML = 'MVP é a sigla de Minimum Viable Product e significa produto mínimo viável. É uma prática de administração de empresas que consiste em lançar um novo produto ou serviço com o menor investimento possível, para testar o negócio antes de aportar grandes investimentos.'
    }else if (trilha == 'validacao'){
        trail.innerHTML = "Trilha de Validação"
        desc.innerHTML = 'Validação de startup nada mais é do que quando você comprova que uma hipótese é verdadeira. Ou seja, verificar se os seus “achismos” são reais através de provas concretas validadas pelo mercado. Isso porque não adianta você querer vender um determinado produto se não tiver público interessado e precisando dele.'
    
    }else if (trilha == 'produto'){
        trail.innerHTML = "Trilha de produto"
        desc.innerHTML = 'O desenvolvimento do produto é uma etapa muito importante para qualquer empresa. Desde a escolha do tipo de desenvolvimento a seguir, até à definição do dia de lançamento deste, o empreendedor tem várias responsabilidades a tomar.'
    }else if (trilha == 'discProblem'){
        trail.innerHTML = "Trilha a partir do descobrimento do problema"
        desc.innerHTML = 'Pense em alguns desafios que te instigam a sugerir uma solução e que sejam desafios relevantes para um grupo consideravel de pessoas!'
    }else if (trilha == 'valiIdea'){
        trail.innerHTML = "Trilha a partir de validação da ideia"
        desc.innerHTML = 'A validação de ideias é uma das coisas mais importantes para qualquer empreendedor que quer começar um novo negócio ou também para você que quer lançar um produto novo. Sabia que no Brasil, segundo algumas pesquisas, 40% das startups fecham porque lançam produtos que ninguém quer comprar? Pense em alguns desafios que te instigam a sugerir uma solução e que sejam desafios relevantes para um grupo consideravel de pessoas.'

    }else if (trilha == 'ideacao'){
        trail.innerHTML = "Trilha a partir da ideação"
        desc.innerHTML = 'Ideação é a terceira etapa do Design Thinking e é marcada por ser o momento onde acontece o brainstorming sobre o projeto e sobre as propostas para solucionar o problema apresentado.'
    }


  
}

function mainPage(){
    window.open("/pages/main-page/index.html", target="_self");
}


document.querySelector('#level').addEventListener('change',nextQuestion);

document.querySelector('#btn-enter').addEventListener('click',mainPage);