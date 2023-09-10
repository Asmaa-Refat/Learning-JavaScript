let addButton = document.querySelector(".add");
let canvas = document.querySelector(".tasks");
let inputField = document.querySelector(".input");
let tasksList = [];
let id = 0 | tasksList.length;

window.onload = () => {
    if(localStorage.tasks) {
        tasksList = JSON.parse(localStorage.tasks);
        id = tasksList.length;

        tasksList.forEach(element => {
            createOneTask(element['title']);
        });
    }
    deleteTask();
}

function createOneTask(value) {
    let taskContainer = document.createElement("div");
    let taskContent = document.createTextNode(value);
    let deleteContent = document.createTextNode("Delete")
    let deleteButton = document.createElement("button");

    canvas.style.cssText = "margin-left: 22%; height: auto;";
    deleteButton.style.cssText = "border: none; background: #e22f46; color: white; border-radius: 3px;transform: translate(3px, 1px); float: right;"
    taskContainer.style.cssText = "background: white; margin-bottom:15px; padding: 8px 14px 8px 12px; border-radius: 7px ";
    deleteButton.appendChild(deleteContent);
    taskContainer.appendChild(taskContent);

    taskContainer.appendChild(deleteButton);
    canvas.appendChild(taskContainer);
    document.body.appendChild(canvas);
}

function deleteTask() {
    let canvasChildren = canvas.children;
    let len = canvasChildren.length;
    for (let i = 0; i < len; ++i){
        let child = canvasChildren[i].children[0];
        child.addEventListener('click', ()=>{
            canvasChildren[i].remove();
            let newArray = tasksList.filter(obj => obj.id !== i);
            tasksList = newArray;
            localStorage.setItem('tasks', JSON.stringify(newArray));
        });
    }
}

addButton.addEventListener('click', ()=>{
    createOneTask(inputField.value);

    tasksList.push({id: ++id, title: inputField.value});
    localStorage.tasks = JSON.stringify(tasksList);
    inputField.value = "";
});