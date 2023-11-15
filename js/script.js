let titulo = document.querySelector("h1");
titulo.textContent = "Sistema de cadastro";
let participantes = document.querySelector("h2");
participantes.innerHTML = "Pacientes cadastrados";
//criação da função IMC

var pacientes = document.querySelectorAll('.paciente');
for(i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];
    console.log(paciente.querySelector(".info-nome").textContent);
    var peso = paciente.querySelector(".info-peso").textContent;
    console.log(peso);
    var altura = paciente.querySelector(".info-altura").textContent;
    console.log(altura);
    var exibirIMC = paciente.querySelector(".info-imc").textContent = calcularIMC(peso, altura);
    // let imc = peso / (Math.pow(altura, 2));
    //var exibirIMC = paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    console.log("O seu IMC é " +calcularIMC(peso, altura));
    var pesoValido = validarPeso(peso)
    var alturaValida = validarAltura(altura);
    /* if(peso<0 || peso >=500)
    {
        var pesoErrado = paciente.querySelector(".info-imc");
        pesoErrado.textContent = "Peso inválido"
        //paciente.style.color = "red";
        // paciente.style.backgroundColor = "lightCoral"; //alterar o background
        paciente.classList.add('paciente-invalido');
    }
    if(altura < 0 || altura > 3)
    {
        var alturaErrada = paciente.querySelector(".info-imc");
        alturaErrada.textContent = "Altura inválida";
        //paciente.style.backgroundColor = "lightCoral"; //alterar o background
        // paciente.style.color = "red"; -> modificando o estilo da cor da linha
        paciente.classList.add('paciente-invalido');
    } */
}

function validarPeso(peso){
    if(peso < 0 || peso >=250)
    {
        var pesoErrado = paciente.querySelector(".info-imc");
        pesoErrado.textContent = "Peso inválido"
        //paciente.style.color = "red";
        // paciente.style.backgroundColor = "lightCoral"; //alterar o background
        paciente.classList.add('paciente-invalido'); 
        return false;
    }
    if(peso > 0 && peso < 250)
    {
    return true;
    }
}

function validarAltura(altura){
    if(altura < 0 || altura > 3)
    {
        var alturaErrada = paciente.querySelector(".info-imc");
        alturaErrada.textContent = "Altura inválida";
        //paciente.style.backgroundColor = "lightCoral"; //alterar o background
        // paciente.style.color = "red"; -> modificando o estilo da cor da linha
        paciente.classList.add('paciente-invalido');
        return false;
    }
    else
    {
        if(altura > 0 && altura < 3)
        return true;
    }
}
function calcularIMC(peso, altura)
{
    var imc = peso / (Math.pow(altura, 2));
    return imc.toFixed(2);
}


        
        
        //vai retornar o valor undefined caso eu não faça retornar o valor que eu desejo manualmente
/*
// primeiro paciente
let paciente = document.getElementById('primeiro__paciente');
console.log(paciente);
peso = paciente.querySelector(".info-peso").textContent;
console.log(peso);
altura = paciente.querySelector(".info-altura").textContent;
console.log(altura);
var exibirIMC = paciente.querySelector(".info-imc").textContent = mostrarIMC();
//segundo paciente
let paciente2 = document.getElementById('segundo__paciente');
peso = paciente2.querySelector(".info-peso").textContent;
console.log(peso);
altura = paciente2.querySelector(".info-altura").textContent;
console.log(altura);
var exibirIMC = paciente2.querySelector(".info-imc").textContent = mostrarIMC();
//terceiro paciente
let paciente3 = document.getElementById('terceiro__paciente');
peso = paciente3.querySelector(".info-peso").textContent;
console.log(peso);
altura = paciente3.querySelector(".info-altura").textContent;
console.log(altura);
var exibirIMC = paciente3.querySelector(".info-imc").textContent = mostrarIMC();
//quarto paciente
let paciente4 = document.getElementById('quarto__paciente');
peso = paciente4.querySelector(".info-peso").textContent;
console.log(peso);
altura = paciente4.querySelector(".info-altura").textContent;
console.log(altura);
var exibirIMC = paciente4.querySelector(".info-imc").textContent = mostrarIMC();
//quinto paciente
let paciente5 = document.getElementById('quinto__paciente');
peso = paciente5.querySelector(".info-peso").textContent;
console.log(peso);
altura = paciente5.querySelector(".info-altura").textContent;
console.log(altura);
var exibirIMC = paciente5.querySelector(".info-imc").textContent = mostrarIMC();
*/




