function ShowBurguer(){
    const navigation=document.querySelector(".navigation");
    if(navigation.style.display=="none"){
        navigation.style.display="block";
    }else{
        navigation.style.display="none"
    }
}