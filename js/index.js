function saudacao() {
  const data = new Date();

  const hour = data.getHours();

  const saudacao = document.getElementById("saudacao");

  if(hour >= 6 && hour < 12) {
    saudacao.innerHTML = "Bom dia! Estamos abertos 😃"
  } 
  else if(hour >= 12 && hour < 18) {
    saudacao.innerHTML = "Boa tarde! Estamos abertos 😃"
  }
  else if(hour >= 18 && hour < 20) {
    saudacao.innerHTML = "Boa noite! Estamos abertos 😃"
  }
  else if(hour > 20) {
    saudacao.innerHTML = "Boa noite! Estamos fechados 🙁"
  }
}