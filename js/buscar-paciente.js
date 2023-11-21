var botaoBuscar = document.querySelector("#buscar-paciente");
botaoBuscar.addEventListener("click", () => {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost:3000/pacientesss");
	xhr.addEventListener("load", function()	{
		if (xhr.status == 200) {
			var resposta = xhr.responseText; //atributo responsável por cuspir o valor que será trago pela API. 
			console.log(resposta);
			console.log(typeof resposta); // a resposta vai ser uma string

			var pacientes = JSON.parse(resposta); //transformar de Json para um objeto JS
			console.log(pacientes);
			console.log(typeof pacientes);

			pacientes.forEach((paciente) => AdicionarPacienteNaTabela(paciente));
		}
		else{
			var mensagemErro = document.querySelector("#ajax-erro")
			mensagemErro.classList.remove("invisivel");
		}
	})
	xhr.send(); //método responsável por enviar a requisição
})
