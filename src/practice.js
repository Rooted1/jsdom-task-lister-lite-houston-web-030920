// let form = document.querySelector('#create-task-form')

let priority = document.createElement('select')

let p1 = document.createElement('option')
p1.innerHTML = "High Priority !!!"
let p2 = document.createElement('option')
p2.innerHTML = "Medium Priority !!"
let p3 = document.createElement('option')
p3.innerHTML = "Low Priority !"

priority.append(p1)
priority.append(p2)
priority.append(p3)

let form = document.querySelector("#create-task-form")
form.append(priority)
// form.insertAdjacentHTML("afterbegin", priority)



document.addEventListener("submit", (e) => {
  e.preventDefault()
  let userTask = document.querySelector('#new-task-description').value
  let priorityValue = document.querySelector('select').value
  let task = document.createElement('li')

  if (priorityValue == "High Priority !!!"){
    task.style.color = "red"
  } else if (priorityValue == "Medium Priority !!"){
    task.style.color = "yellow"
  }else if (priorityValue == "Low Priority !"){
    task.style.color = "green"
  }
  let btn = document.createElement('button')
  btn.innerHTML = 'X'
  task.innerHTML = userTask
  task.append(btn)
  let ulTodos = document.getElementById('tasks');
  ulTodos.append(task)


  btn.addEventListener('click', function(){
    task.remove()
  })
});
