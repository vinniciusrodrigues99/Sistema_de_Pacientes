var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", (event) => 
{
    event.preventDefault();
    console.log('Oi, eu sou o botão e fui clicado');
    //extraindo informações do form
    var form = document.querySelector("#form-adiciona");
    console.log(form.nome.value);
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value

    //criando as linhas e tabelas com base nas informações de entrada do form  
    var adcPaciente = document.createElement("tr");
    var tdNome = document.createElement("td");
    tdNome.textContent = nome;
    var tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    var tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    var tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    var tdImc = document.createElement("td");
    tdImc.textContent = calcularIMC(peso, altura);
    
    adcPaciente.appendChild(tdNome);
    adcPaciente.appendChild(tdPeso);
    adcPaciente.appendChild(tdAltura);
    adcPaciente.appendChild(tdGordura);
    adcPaciente.appendChild(tdImc);
    
    //adicionando o paciente na tabela
    var tableNova = document.querySelector("#tabela-pacientes")
    tableNova.appendChild(adcPaciente);
    adcPaciente.classList.add('paciente');
    adcPaciente.classList.add("info-imc");
}
)