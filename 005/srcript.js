function contar(){
let inicio=document.querySelector("#txti");
let fim=document.querySelector("#txtf");
let passo=document.querySelector("#txtp");
let res=document.querySelector("#resultado");

// convertendo os dados vindo do formulário
// percorrendo os numeros

for(let c=Number(inicio.value);c<=Number(fim.value);c+=Number(passo.value)){
    res.innerHTML+=`${c}`;
}

}




for(let i=0;i<=20;i+=2){
    console.log(i);
}
