
form.addEventListener('submit', (e) => {
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('password-2').value;

    let message = document.getElementById('message');
    let inputControl = document.querySelector('.default');
    
    if(password.length != 0){
        if(password === password2){
            message.textContent = '';
        }else{
            message.textContent = '*Password do not match';

        }
    }

    e.preventDefault();
    
})





