//login & todo
const login = document.querySelector('#login');
const loginInput = document.querySelector('#loginInput')
const userId = document.querySelector('#name')
const todoForm = document.querySelector('#todos')
const todoInput = document.querySelector('#todosInput')
const btn = document.querySelector('#btn')
//const todoList
let currentId = "";
let id = {};
let todoList = [];


const onLogin = (event) => {
    event.preventDefault();
    currentId = loginInput.value;
    loginInput.remove();
    btn.remove();

    userId.innerHTML = `<h2>Hi! ${currentId}<h2>`;
    savedTodo = localStorage.getItem(currentId);
    const temp = document.querySelector("#todoList");
    const list = document.createElement("ul");
    temp.appendChild(list);

    if (savedTodo === null) {
        localStorage.setItem(currentId, JSON.stringify([]))
    } else {
        todoList = JSON.parse(savedTodo)
    }
    todoList.forEach(obj => addList(obj))
}

const onTodo = (event) => { // todo 추가
    event.preventDefault();
    //console.log(todoInput.value);
    const schedule = todoInput.value;
    if (schedule === "" || currentId === "") {
        todoInput.value = ""
        return;
    } else {
        const newTodoObj = {
            text: schedule,
            id: Date.now(),
        };
        todoList.push(newTodoObj);
        //console.log(JSON.stringify(todoList))
        localStorage.setItem(currentId, JSON.stringify(todoList));
        todoInput.value = "";
        addList(newTodoObj);
    }
}

const deltodo = (event) => {
    //console.log(event.path[1])
    //console.log(typeof (event.path[1]))
    const deletingId = parseInt(event.path[1].id)

    todoList = todoList.filter((elem) => {
        return elem["id"] !== deletingId
    })
    localStorage.setItem(currentId, JSON.stringify(todoList));
    console.log(todoList)
    //const removeElement = document.querySelector(event.path[1]);
    event.path[1].remove()
}

const addList = (obj) => {
    const ul = document.querySelector("ul")
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "❌"
    const del = button.addEventListener("click", deltodo);
    console.log(obj["text"]);
    li.setAttribute('id', `${obj["id"]}`);
    li.innerHTML = obj["text"];
    li.appendChild(button);
    ul.appendChild(li)
}

login.addEventListener("submit", onLogin);
todoForm.addEventListener("submit", onTodo)