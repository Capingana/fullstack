let botao = document.querySelector("#btn");
let numero1 = document.querySelector("#numberOne");

botao.addEventListener("click", () => {
  if (numero1 != "") {
    alert("preencha todos os campos")
  } else {
    botao.removeAttribute("disabled");
  }
});
