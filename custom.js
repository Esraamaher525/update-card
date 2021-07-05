let formHeads = [
    'taskTitle',
     "taskType",
      "taskContent", 
      "startDate", 
      "dueDate"]
showHide.addEventListener('click', function(e){
    form_div.classList.toggle('d-none')
    this.textContent == "Show" ? this.textContent='Hide': this.textContent='Show'
    document.querySelector("#btnAddTask").innerHTML="add task"
})

myAddForm.addEventListener('submit', function(e){
    e.preventDefault()
    task = { status:false }
    formHeads.forEach(h => {
            task[h]= this.elements[h].value            
    })
    //check edit or add
    checkModeForm=='edit'?editTask(task):addTask(task);
})