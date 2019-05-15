
console.log('yo')

const list = document.querySelector("#list")
console.log(list)

// what do i need?

const taskInput = document.querySelector("#new-task-description")
const taskForm = document.querySelector("#create-task-form")


// console.log(taskForm)

// wait for the form to be submmited

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  // where should i 🙌 add to the dom
  const taskList = document.querySelector("#tasks")
  const taskItem = document.createElement('li')
  taskItem.innerText = taskInput.value

  // also create DELETE BUTTON
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "delete"

  // taskItem IS NOT on the DOM

  const dropDown = document.getElementById("priority");
  const dropDownValue = dropDown.options[dropDown.selectedIndex].value;
  // if drop down is "red" then cahnge the background color of the taskItem to red
  if (dropDownValue === "red") {
    // change the css change the background color
    taskItem.style.backgroundColor = "red";
  }
  // if drop down is "yellow" then cahnge the background color of the taskItem to yellow
  // if drop down is "green" then cahnge the background color of the taskItem to green



  taskList.appendChild(taskItem)
  // taskItem is ALREADY on the DOM
  taskItem.appendChild(deleteButton)

  deleteButton.addEventListener("click", function(e) {
    taskItem.remove()
  })




  taskForm.reset()
})




//
// document.addEventListener("DOMContentLoaded", () => {
//   // const taskList = new TaskList();
//
//   console.log('yo but after dom loads')
// });
