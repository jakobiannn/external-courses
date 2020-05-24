let backlogSide = document.querySelector('#backLogBlock'),
    addCardBacklog = document.querySelector('#backLogAddCard'),
    currentTask,
    isInputOpen = false;

window.addEventListener('load', function() {
    for (let i = 1; i <= localStorage.getItem('currentBacklogTask'); i++) {
        let oldTaskText = localStorage.getItem(`backlog task ${i}`);

        if (oldTaskText === null) {
            continue;
        } else {
            let oldTask = document.createElement('div');
            oldTask.classList.add("task-side__main-side");
            oldTask.classList.add("text");
            oldTask.innerHTML = oldTaskText;
            oldTask.setAttribute('id', `n${i}`);
            backlogSide.insertBefore(oldTask, addCardBacklog);
        }
    }
    return 1;
});

addCardBacklog.addEventListener('click', function() {

    if (isInputOpen) {
        return;
    };
    let newTaskSide = document.createElement('div');
        newTaskSide.classList.add('task-side__main-side');
        newTaskSide.classList.add('text');

    let backlogForm = document.createElement('form');
        backlogForm.setAttribute('method', 'get');
        backlogForm.setAttribute('id', 'backlog-task')
        backlogForm.setAttribute('onsubmit', 'return false;');

    let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'task');
        input.classList.add('task-side__main-side__input');
        input.classList.add('text');

    
    let addTaskBacklogBtn = document.createElement('button');
        addTaskBacklogBtn.classList.add('task-side__main-side__add-btn');
        addTaskBacklogBtn.setAttribute('type', 'submit');
        addTaskBacklogBtn.setAttribute('id', 'addTaskBackLog');

    let addTaskIcon = document.createElement('img');
        addTaskIcon.setAttribute('src', 'addCard.svg');
        addTaskIcon.setAttribute('alt', 'add');
    
    addTaskBacklogBtn.appendChild(addTaskIcon);
    backlogForm.appendChild(input);
    backlogForm.appendChild(addTaskBacklogBtn);
    newTaskSide.appendChild(backlogForm);

    backlogSide.insertBefore(newTaskSide, addCardBacklog);
    isInputOpen = true;

    addTaskBacklogBtn.addEventListener("click", function() {
        if (input.value === '') {
            newTaskSide.remove();
            return;
        }
        currentTask = localStorage.getItem("currentBacklogTask");
        currentTask++;

        localStorage.setItem(`backlog task ${currentTask}`, input.value);
        
        localStorage.setItem("currentBacklogTask", currentTask);

        newTaskSide.removeChild(backlogForm);
        newTaskSide.innerHTML = input.value;
        newTaskSide.setAttribute('id', `n${currentTask}`);
        isInputOpen = false;
        return;
    })

    return;
})




