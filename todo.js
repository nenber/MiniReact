//selectores
const todoInput = document.querySelector('.todo-list-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

//functions
function addTodo(event) {
    //prevent form from submiting   
    event.preventDefault();
    // schema todo div -> li | button completed | button delete
    // create the todo div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); //make todo-item child of todoDiv
    //create a completed button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton); //make completedButton child of todoDiv
    //create bin button
    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton); // make trashButton child of todoDiv
    //make todoDiv child of todoList : ul
    todoList.appendChild(todoDiv);
    //clear todoInput value
    todoInput.value = "";
}

function deleteCheck(event) {
    let item = event.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //remove item after animation done
        todo.classList.toggle('fall');
        todo.addEventListener('transitioned', function () {
            todo.remove();
        })
    }
    if (item.classList[0] === "complete-btn") {
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    let todos = todoList.childNodes;
    todos.forEach(function (item) {
        switch (e.target.value) {
            case "all":
                item.style.display = "flex";
                break;
            case "completed":
                if (item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!item.classList.contains('completed')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    })
}
function saveLocalTodos(todo) {
    // check if todolist already exist
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
        console.log('empty');
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        console.log("here");
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}