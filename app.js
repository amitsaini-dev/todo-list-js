let input = document.querySelector("input");
let addTaskBtn = document.querySelector("#add-task-btn");
let list = document.querySelector("ol");


addTaskBtn.addEventListener("click", function () {

    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerText = `${input.value}`
    list.appendChild(li);

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

list.addEventListener("click",function(details){
    if(details.target.nodeName=="BUTTON"){
        let listItem=details.target.parentElement;
        listItem.remove();
    }
})