let input = document.querySelector("input");
let addTaskBtn = document.querySelector("#add-task-btn");
let list = document.querySelector("ol");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


for (task of tasks) {
    let li = document.createElement("li");
    li.innerText = task;
    let deleteBtn = addBtn();
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

addTaskBtn.addEventListener("click", function () {

    if (input.value.trim() === "") return;


    let li = document.createElement("li");
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.innerText = input.value;
    list.appendChild(li);

    let deleteBtn = addBtn();
    li.appendChild(deleteBtn);

    input.value = "";
    console.log(task);

})

function addBtn() {
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("del-task");
    return btn;
}

list.addEventListener("click", function (details) {
    if (details.target.nodeName == "BUTTON") {
        let listItem = details.target.parentElement;
        let taskTest = listItem.firstChild.textContent.trim();
        let index = tasks.indexOf(taskTest);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        listItem.remove();
    }
})