let input = document.querySelector("input");
let addTaskBtn = document.querySelector("#add-task-btn");
let list = document.querySelector("ol");
tasks = JSON.parse(localStorage.getItem("tasks")) || [];


for (task of tasks) {
    let li = document.createElement("li");
    li.innerText = task.text;
    if (task.completed) {
        li.classList.add("stike");
    }
    let checkBox = addCheckBox();
    checkBox.checked = task.completed;
    li.appendChild(checkBox);
    let deleteBtn = addBtn();
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

addTaskBtn.addEventListener("click", function () {

    if (input.value.trim() === "") return;


    let li = document.createElement("li");
    tasks.push({ text: input.value, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.innerText = input.value;
    list.appendChild(li);


    let checkBox = addCheckBox();
    checkBox.checked = false;
    li.appendChild(checkBox);
    let deleteBtn = addBtn();
    li.appendChild(deleteBtn);

    input.value = "";

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
        let index = tasks.findIndex(t => t.text === taskTest);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        listItem.remove();
    }
    else if (details.target.nodeName === "INPUT" && details.target.type === "checkbox") {
        let listItem = details.target.parentElement;
        let taskTest = listItem.firstChild.textContent.trim();
        let index = tasks.findIndex(t => t.text === taskTest);
        if (index > -1) {

            tasks[index].completed = !tasks[index].completed;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            listItem.classList.toggle("strike");
        }
    }
})

function addCheckBox() {
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    return checkBox;
}