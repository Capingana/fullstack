function showList() {
  if (itens.style.display == "block") {
    itens.style.display = "none";
  } else {
    itens.style.display = "block";
  }
}

let footerData=document.getElementById("data");
let data=new Date();
let ano=data.getFullYear();
footerData.innerHTML=ano;

