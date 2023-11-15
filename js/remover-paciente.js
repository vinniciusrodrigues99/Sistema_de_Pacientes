var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event)
{
    //remover o pai do event.target que é a minha ação de clique em um td
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode.classList.add("fadeOut"); 
    setTimeout(function(){ // function que seta o tempo para uma ação ser realizada, usando dois parâmetros
        if(alvoEvento.tagName == 'TD'){
        event.target.parentNode.remove();
        }
    }, 500)
    paiDoAlvo.remove();
});