function validarFormulario() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefone = document.getElementById("telefone").value;

  if(nome == "" || email == "" || telefone == "") {
    alert("Campos obrigatórios não preenchidos!")
  }
  else {
    alert("Obrigado por preencher o formulário, entraremos em contato em breve!")
  }
}