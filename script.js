// окно логин //

var link = document.querySelector(".login-link");
var linkClose = document.querySelector(".modal-close");
var popup = document.querySelector(".modal-login");
var form = popup.querySelector("form");
var login = document.getElementById("input-user-login");
var password = document.getElementById("input-user-password");
var storageLog = localStorage.getItem("login");
var isStorageSupport = true;

//<<-- -->>//
// карта //

var clck = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var clckClose = mapPopup.querySelector(".modal-close");

// окно логин //

link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storageLog) {
        login.value = storageLog;
        password.focus();
    }
    else {
        login.focus();
    }
});

linkClose.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

try {
    localStorage.getItem("login");
}
catch{
    isStorageSupport = false;
}

form.addEventListener("submit", function(evt){
evt.preventDefault();
    if (!login.value || !password.value) {
        popup.classList.add("modal-error");
    } 
    else {
        if (isStorageSupport) {
        localStorage.setItem("login",login.value);
        }
    alert("Вы ввели" + "\n" + "Логин: " + login.value + "\n" + "Пароль: " + password.value);
    }
});

window.addEventListener("keydown", function(evt){
    if (evt.key === 'Escape'){
        evt.preventDefault();
        if (popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show");
        }
    }
});

//<<-- -->>//
// карта //

clck.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

clckClose.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
    if (evt.code === 'Escape'){
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")){
            mapPopup.classList.remove("modal-show");
        }
    }
});

//<<-- -->>//
