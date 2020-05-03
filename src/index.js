document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById("create-task-form")
  const allTasks = document.getElementById('tasks')
  const selectLabel = document.createElement('label')
  const dateLabel = document.createElement('label')
  dateLabel.textContent = " Enter Due Date: "
  selectLabel.textContent = "Set Priority: "
  form.append(selectLabel)
  form.append(dateLabel)

  // create due date tags
  const dateField = document.createElement('input')
  form.append(dateField)

  // create priority HTML tags and attach to form
  const createPriority = document.createElement('select')
  const option1 = document.createElement('option')
  option1.textContent = "High"
  const option2 = document.createElement('option')
  option2.textContent = "Medium"
  const option3 = document.createElement('option')
  option3.textContent = "Low"
  createPriority.append(option1, option2, option3)
  form.append(createPriority)
  dateLabel.before(createPriority)
  dateField.after(form[1])

  // get user inputs and set priority colors
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let task = form[0].value
    const newItem = document.createElement('li')

    // set priority colors
    switch (form[1].value){
      case 'High':
        newItem.style.color = "red"
        break;
      case 'Medium':
        newItem.style.color = "#ffa31a"
        break;
      case 'Low':
        newItem.style.color = "green"
    }

    // add delete button to task and event listener
    let delItem = document.createElement('button')
    delItem.style.backgroundColor = "#ff66b3"
    delItem.textContent = "x"
    newItem.textContent = task

    newItem.append(delItem)
    allTasks.append(newItem)

    delItem.addEventListener('click', function(){
      newItem.remove()
    })

    // set due date
    let dueDate = document.createElement('p')
    dueDate.innerText = `Due: ${form[2].value}`
    newItem.append(dueDate)
  })
})
