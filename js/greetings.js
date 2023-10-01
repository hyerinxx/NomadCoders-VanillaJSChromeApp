const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input[name=input]");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    onGreeting();
}

function onGreeting(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(localStorage.getItem(USERNAME_KEY) == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    onGreeting();
}