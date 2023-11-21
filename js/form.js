var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", (event) => 
{
    event.preventDefault();
    console.log('Oi, eu sou o botão e fui clicado');
    //extraindo informações do form
    var form = document.querySelector("#form-adiciona");
   /* console.log(form.nome.value);
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value */
    var paciente = extraindoForm(form);
    //criando as linhas e tabelas com base nas informações de entrada do form  
    //var adcPaciente = montarTr(paciente);
    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length>0){
        alert("Paciente inválido");
        exibeMensagensDeErros(erros);
        form.reset(); 
        return;
    }
    AdicionarPacienteNaTabela(paciente);
    /*
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
    */
    //adicionando o paciente na tabela
    //var tableNova = document.querySelector("#tabela-pacientes")
   // tableNova.appendChild(adcPaciente);
   /* adcPaciente.classList.add('paciente');
    adcPaciente.classList.add("info-imc"); */ 
    
    //resetando os campos
    form.reset(); 
    var mensagem = document.querySelector("#mensagens-erro");
    mensagem.innerHTML = "";
});
function AdicionarPacienteNaTabela(paciente){
    var adcPaciente = montarTr(paciente);
    var tableNova = document.querySelector("#tabela-pacientes")
    tableNova.appendChild(adcPaciente);
}
function exibeMensagensDeErros(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) 
    { //para cada ítem do meu array execute a function
        var li = document.createElement("li");
        li.textContent = String(erro);
        ul.appendChild(li);
    });
}
function extraindoForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}
function montarTr(paciente){
    //criando as linhas e colunas da tabela
    /* var adcPaciente = document.createElement("tr");
    adcPaciente.classList.add("paciente");
    var tdNome = document.createElement("td");
    tdNome.textContent = paciente.nome;
    var tdPeso = document.createElement("td");
    tdPeso.textContent = paciente.peso;
    var tdAltura = document.createElement("td");
    tdAltura.textContent = paciente.altura;
    var tdGordura = document.createElement("td");
    tdGordura.textContent = paciente.gordura;
    var tdImc = document.createElement("td");
    //tdImc.textContent = calcularIMC(peso, altura);
    tdImc.textContent = paciente.imc;
    */ 
    //criando as linhas e colunas de uma forma mais limpa
    const listaPacientes = [];
    var peso = paciente.peso;
    if(validarPeso(peso)){
    listaPacientes.push(adcPaciente);
    var adcPaciente = document.createElement("tr");
    adcPaciente.classList.add("paciente");
    /*associando os td ao tr
    adcPaciente.appendChild(tdNome);
    adcPaciente.appendChild(tdPeso);
    adcPaciente.appendChild(tdAltura);
    adcPaciente.appendChild(tdGordura);
    adcPaciente.appendChild(tdImc);
    */
    adcPaciente.appendChild(montarTd(paciente.nome, "info-nome"));
    adcPaciente.appendChild(montarTd(paciente.peso, "info-peso"));
    adcPaciente.appendChild(montarTd(paciente.altura, "info-altura"));
    adcPaciente.appendChild(montarTd(paciente.gordura, "info-gordura"));
    adcPaciente.appendChild(montarTd(paciente.imc, "info-imc"));

    return adcPaciente;
}
    else
    return;
}
function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function validaPaciente(paciente){
    var erros = []; //criando um array de erros
    if(paciente.nome.length == 0 ){
        erros.push("Erro causado, pois o paciente não tem nome");
    }
    if(paciente.altura.length == 0 ){
        erros.push("Erro causado, pois o campo altura não foi preenchida");
    }
    if(paciente.peso.length == 0){
        erros.push("Erro causado, pois o campo de peso não foi preenchido")
    }
    if(paciente.gordura.length == 0){
        erros.push("Erro causado, pois o campo de gordura não foi preenchido")
    }
    if(validarPeso(paciente.peso) && validarAltura(paciente.altura)){
        //console.log(erros);
        return true;
    }
    else{
        if(!validarPeso(paciente.peso) || !validarAltura(paciente.altura))
        erros.push("Os dados do paciente são inválidos");
    return erros;
    }
}

