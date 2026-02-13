let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#login");
let msg = document.querySelector("#msg")

loginBtn.addEventListener('click', () => {
    if(username.value ==='Admin' && password.value === '12345'){
        window.location.href = 'Home.html';
    }else{

    }
});