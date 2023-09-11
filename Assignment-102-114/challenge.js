let addTaskButton = document.querySelector(".add");
let canvas = document.querySelector(".tasks");
let inputField = document.querySelector(".input");
let tasksList = [];      
let id = localStorage.id || 0;

window.onload = () => {
    if(localStorage.tasks) {
        tasksList = JSON.parse(localStorage.tasks);
        id = localStorage.getItem("id");

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
    deleteButton.className = "delete";

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
        inputField.value = "";
        localStorage["id"] = id;
    }
});

document.addEventListener("click", (element)=>{
    if(element.target.className === "delete") {
        element.target.parentElement.remove();

        let canvasChildren = canvas.children;
        let len = canvasChildren.length;
        for(let i = 0; i < len; i++) {
            tasksList[i].title = canvasChildren[i].firstChild.textContent;
        }
        tasksList = tasksList.slice(0, len);

        localStorage.setItem('tasks', JSON.stringify(tasksList));
    }

});

