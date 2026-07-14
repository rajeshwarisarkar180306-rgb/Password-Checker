const password=document.getElementById("password");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
let strongOrNot;

submit.onclick=function(){
    strongOrNot=password.value;

    if (strongOrNot.length<8){
        result.textContent="Weak Password";
    }
}
