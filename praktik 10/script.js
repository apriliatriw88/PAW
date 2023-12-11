function validateLogin (e){
    e.preventDefault();

    if (password.value.Length < 6){
        document.querySelector('#password+. text-error').innerHTML='Password'
    }
}
