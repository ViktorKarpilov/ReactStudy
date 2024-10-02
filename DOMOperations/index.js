// New items:
// addEventListener to wait for the DOM to be loaded
// quesrySelector to get the todo-list element
// tamplate string to create the li element
// use const or let to declare variables

document.addEventListener("DOMContentLoaded", () => {
    const todoList = document.querySelector('#todo-list');
    const addTodoInput = document.getElementById("add-todo-input");

    function addTask(name) {
        const li = document.createElement('li');
        li.innerHTML = `<span><i class="fa fa-trash"></i></span>${name}`;
        
        const trashIcon = li.querySelector('.fa-trash');
        trashIcon.addEventListener("click", () => deleteTask(trashIcon));
        
        todoList.appendChild(li);
    }

    function deleteTask(element) {
        element.closest('li').remove();
    }

    addTodoInput.addEventListener("keypress", (event) => {
        // trim() removes any leading or trailing white spaces
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            addTask(event.target.value.trim());
            // clear the input field
            event.target.value = '';
        }
    });

    todoList.addEventListener("click", (event) => {
        if (event.target.classList.contains('fa-trash')) {
            deleteTask(event.target);
        }
    });
});