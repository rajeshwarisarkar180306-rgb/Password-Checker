const password=document.getElementById("password");
const submit=document.getElementById("submit");
const result=document.getElementById("result");
let strongOrNot;

submit.onclick=function(){
    strongOrNot=password.value;

    const hasSpecialChar = /[^A-Za-z0-9]/.test(strongOrNot);   // anything not a-z, A-Z, 0-9
    const hasNumber = /\d/.test(strongOrNot);                  // digits 0–9
    const hasUppercase = /[A-Z]/.test(strongOrNot);            // uppercase letters
    const hasLowercase = /[a-z]/.test(strongOrNot);            // lowercase letters

    if (hasSpecialChar && hasNumber && hasUppercase && hasLowercase && strongOrNot.length>=8){
        result.textContent="Strong Password..! Brilliant! You can use this password.";
    }
    else{
        result.innerText="Weak Password...! Please try again.";
        result.innerText+="\nChoose a strong password with atleast 8 characters, including atleast one uppercase letter, one lowercase letter, one number and one special character.";
    }
}
