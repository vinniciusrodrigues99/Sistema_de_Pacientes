let titulo = document.querySelector("h1");
titulo.textContent = "Campeonato de FIFA 24";
let participantes = document.querySelector("h2");
participantes.innerHTML = "Atletas participando:";
//criação da função IMC

var pacientes = document.querySelectorAll('.paciente');
for(i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];
    console.log(paciente.querySelector(".info-nome").textContent);
    peso = paciente.querySelector(".info-peso").textContent;
    console.log(peso);
    altura = paciente.querySelector(".info-altura").textContent;
    console.log(altura);
    let imc = peso / (Math.pow(altura, 2));
    var exibirIMC = paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    console.log("O seu IMC é " +imc.toFixed(2));
    if(peso<0 || peso >=500)
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
    }
}
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", (event) => 
{
    event.preventDefault();
    console.log('Oi, eu sou o botão e fui clicado');
    var form = document.querySelector("#form-adiciona");
    console.log(form.nome.value);
    var adcPaciente = document.createElement("tr");
    var tdNome = document.createElement("td");
    tdNome.textContent = form.nome.value;
    var tdPeso = document.createElement("td");
    tdPeso.textContent = form.peso.value;
    var tdAltura = document.createElement("td");
    tdAltura.textContent = form.altura.value;
    var tdGordura = document.createElement("td");
    tdGordura.textContent = form.gordura.value;
    var tdImc = document.createElement("td");
    tdImc.textContent = exibirIMC;

    adcPaciente.appendChild(tdNome);
    adcPaciente.appendChild(tdPeso);
    adcPaciente.appendChild(tdAltura);
    adcPaciente.appendChild(tdGordura);
    adcPaciente.appendChild(tdImc);

    var tableNova = document.querySelector("#tabela-pacientes")
    tableNova.appendChild(adcPaciente);
    adcPaciente.classList.add('paciente');
    
}
)

        
        
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




