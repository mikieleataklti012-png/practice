function confirmPassword(event){
    let password=document.getElementById('password');
    let comfirmpass=document.getElementById('confirm');
    let error=document.querySelector('.error');
    if(password.value!==""&& comfirmpass.value===password.value){
        event.preventDefault();
        error.textContent="sign up successful";
        return;
    }
    else if(password.value===""){
        event.preventDefault();
        error.textContent="password can not be empty";
        return;
    }
    else{
        error.textContent="Password and Confirm Password dont match please do it again";
    }
}

let form=document.querySelector('form');
form.addEventListener('submit',confirmPassword);