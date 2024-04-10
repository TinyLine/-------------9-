document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');

    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            const todoItem = createTodoElement(todo.text, todo.completed);
            todoList.appendChild(todoItem);
        });
    }

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('.todo-item').forEach(todoItem => {
            todos.push({
                text: todoItem.querySelector('span').innerText,
                completed: todoItem.querySelector('input[type="checkbox"]').checked
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function createTodoElement(text, completed = false) {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <input type="checkbox" ${completed ? 'checked' : ''}>
            <span>${text}</span>
        `;
        if (completed) {
            todoItem.classList.add('completed');
        }
        return todoItem;
    }

    loadTodos();

    newTodoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const todoText = newTodoInput.value.trim();
            if (todoText !== '') {
                const todoItem = createTodoElement(todoText);
                todoList.appendChild(todoItem);
                saveTodos();
                newTodoInput.value = '';
            }
        }
    });

    todoList.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            const todoItem = event.target.parentElement;
            if (event.target.checked) {
                todoItem.classList.add('completed');
            } else {
                todoItem.classList.remove('completed');
            }
            saveTodos();
        }
    });
});