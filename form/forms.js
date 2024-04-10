function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Функція для зчитування даних з localStorage та встановлення їх у поля вводу
function loadFromLocalStorage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Перевірка, чи існують дані в localStorage
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

// Функція для перевірки входу
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

// Виклик функції при завантаженні сторінки
window.onload = function() {
    loadFromLocalStorage();
    
    // Додаємо обробник подій для форми реєстрації, щоб зберегти дані при її відправці
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Попереджуємо дефолтну поведінку форми
        
        const nameValue = document.getElementById('name').value;
        const emailValue = document.getElementById('email').value;
        const passwordValue = document.getElementById('password').value;
        
        saveToLocalStorage('name', nameValue);
        saveToLocalStorage('email', emailValue);
        saveToLocalStorage('password', passwordValue);
        
        alert('Дані збережено в localStorage!');
    });
    
    // Додаємо обробник подій для форми входу
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Попереджуємо дефолтну поведінку форми
        
        login();
    });
};