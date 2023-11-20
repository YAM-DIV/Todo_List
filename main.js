let inputTodo = document.querySelector('.inputTodo');
let todoBtn = document.querySelector('.todoBtn');
let todoList = document.querySelector('.todo-list');

// add events
todoBtn.addEventListener('click', listClick);
todoList.addEventListener('click', checkOrDelete);



// add functions

function listClick(){
    if(inputTodo.value != ''){
        // creat li and add class
        let todoli = document.createElement('li');
        todoli.classList.add('todo');
        // creat div and add class
        let todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // creat button and add class
        let completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

        // creat button and add class
        let trashBtn = document.createElement('button');
        trashBtn.classList.add('trash-btn');
        trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        todoli.appendChild(todoItem);
        todoli.appendChild(completeBtn);
        todoli.appendChild(trashBtn);
        todoItem.innerText = inputTodo.value;

        // add li to ul
        todoList.appendChild(todoli);

        // remove input value
        inputTodo.value = '';
    }else{
        alert('Plase Enter Value');
    }
    
}

function checkOrDelete(e){
    let item = e.target;
    if(item.classList[0] == 'complete-btn'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    if(item.classList[0] == 'trash-btn'){
        let todo = item.parentElement;
        todo.classList.toggle('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
    }
}