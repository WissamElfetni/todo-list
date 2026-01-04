let input = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

addBtn.onclick = function () {
if (input.value === "") {
alert("Enter task")
return
}

let li = document.createElement("li")
li.textContent = input.value
let deleteBtn = document.createElement("button")
deleteBtn.textContent = "❌"

deleteBtn.onclick = function () {
li.remove()
}


li.appendChild(deleteBtn)


taskList.appendChild(li)


input.value = ""
}