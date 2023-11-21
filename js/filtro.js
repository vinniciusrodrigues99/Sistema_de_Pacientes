var campoFiltro = document.querySelector("#filtro__busca");
campoFiltro.addEventListener("input", () => 
{
  //"evento de input(digitar)"
  console.log(campoFiltro.value);
  var pacientes = document.querySelectorAll(".paciente");
  if (campoFiltro.value.length > 0) 
    {
        console.log("tem algo digitado");
        for (i = 0; i < pacientes.length; i++)
        {
        // var paciente = pacientes[i];
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var expressao = new RegExp(campoFiltro.value, "i"); //expressao regular para filtrar pelo caracter; 
        console.log(nome);
        // if (nome != campoFiltro.value)
        if( !expressao.test(nome)) //O método test verificar se há uma correspondência regular na string fornecida, ou seja, se o valor é true ou false. 
        {
            paciente.classList.add("invisivel");
        } 
        else 
        {
            paciente.classList.remove("invisivel");
        }
        }
    } 
    else
        {
            pacientes.forEach((paciente) => 
            { 
            paciente.classList.remove("invisivel");
            });
        }
});
