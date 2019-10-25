function check() {
    let des = document.querySelector(".form");
    let inputLogin = des.children[0];
    let inputPassword = des.children[1];
    let statusLogin = false;
    let statusPassword = false;

    function statusCheck() {
        let status = statusLogin && statusPassword;
        if(status) des.children[2].disabled = false
        else des.children[2].disabled = true
    }
    
    inputLogin.addEventListener('input', function(e){
        if(e.target.value.length >= 6) statusLogin = true;
        else statusLogin = false
        statusCheck()
    })
    
    inputPassword.addEventListener('input', function(e){
        if(e.target.value.length >= 6) statusPassword = true;
        else statusPassword = false
        statusCheck()        
    })
    form.addEventListener('submit', function(){
        alert(`логин: ${inputLogin.value}\n Пароль:${inputPassword.value}`)
    })
}
check()
