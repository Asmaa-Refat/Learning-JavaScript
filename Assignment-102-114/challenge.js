let addTaskButton = document.querySelector(".add");
let canvas = document.querySelector(".tasks");
let inputField = document.querySelector(".input");
let tasksList = [];
let id = localStorage.tasks === undefined? 0: JSON.parse(localStorage.tasks).length ;

window.onload = () => {
    if(localStorage.tasks) {
        tasksList = JSON.parse(localStorage.tasks);
        id = tasksList.length;

        tasksList.forEach(element => {
            createOneTask(element['title']);
        });
    }
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

addTaskButton.addEventListener('click', ()=>{
    if(inputField.value !== "") {
        createOneTask(inputField.value);
        tasksList.push({id: ++id, title: inputField.value});
        localStorage.tasks = JSON.stringify(tasksList);
        addEventOnDeleteButton();
        inputField.value = "";
    }
});

function addEventOnDeleteButton() {
    let canvasChildren = canvas.children;
    let len = canvasChildren.length;
    
    let deleteButton = canvasChildren[len-1].children[0]; //button
    deleteButton.addEventListener('click', ()=>{
        canvasChildren[len-1].remove();
        console.log("delete");
        let deletedIndex = tasksList[len-1].id;
        console.log(deletedIndex);
        let newArray = tasksList.filter(obj => obj.id !== deletedIndex);
        tasksList = newArray;
        localStorage.setItem('tasks', JSON.stringify(tasksList));
    });
    
}

