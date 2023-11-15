var campoFiltro = document.querySelector("#filtro__busca");
campoFiltro.addEventListener("input", ()=>{
    console.log(campoFiltro.value);
    var pacientes = document.querySelectorAll(".paciente");
    for(i = 0; i< pacientes.length; i++)
    {   // var paciente = pacientes[i];
        var paciente = pacientes[i];
        var nome = paciente.querySelector(".info-nome").textContent;
        console.log(nome);
    };
})