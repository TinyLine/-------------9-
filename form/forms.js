function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (localStorage.getItem('name')) {
        nameInput.value = JSON.parse(localStorage.getItem('name'));
    }
    if (localStorage.getItem('email')) {
        emailInput.value = JSON.parse(localStorage.getItem('email'));
    }
    if (localStorage.getItem('password')) {
        passwordInput.value = JSON.parse(localStorage.getItem('password'));
    }
}

function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    
    const savedEmail = JSON.parse(localStorage.getItem('email'));
    const savedPassword = JSON.parse(localStorage.getItem('password'));
    
    if (loginEmail === savedEmail && loginPassword === savedPassword) {
        alert('Ви успішно увійшли!');
    } else {
        alert('Невірний логін або пароль!');
    }
}

window.onload = function() {
    loadFromLocalStorage();
    
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('password').value;
        
        saveToLocalStorage('name', nameValue);
        saveToLocalStorage('email', emailValue);
        saveToLocalStorage('password', passwordValue);
        
        alert('Дані збережено в localStorage!');
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        login();
    });
};