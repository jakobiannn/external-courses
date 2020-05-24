let addCardFinished = document.querySelector('#finishedAddCard'),
    finishedBlock = document.querySelector('#finishedBlock'),
    currentFinishedTask,
    isSelectFinishedOpen = false;

window.addEventListener('load', function() {
    for (let i = 1; i <= localStorage.getItem('currentFinishedTask'); i++) {
        let oldTaskText = localStorage.getItem(`finished task ${i}`);

        if (oldTaskText === null || oldTaskText === 'null') {
            continue;
        } else {
            let oldTask = document.createElement('div');
            oldTask.classList.add("task-side__main-side");
            oldTask.classList.add("text");
            oldTask.innerHTML = oldTaskText;
            oldTask.setAttribute('id', `n${i}`)
            finishedBlock.insertBefore(oldTask, addCardFinished);
        }
    }
});

addCardFinished.addEventListener('click', function() {
    if (isSelectFinishedOpen) {
        return;
    }


    isSelectFinishedOpen = true;

    let newTaskSide = document.createElement('div');
        newTaskSide.classList.add('task-side__main-side');
        newTaskSide.classList.add('text');

    let form = document.createElement('form');
        form.setAttribute('method', 'get');
        form.classList.add('task-side__main-side__form');
        form.setAttribute('onsubmit', 'return false;');

    let selectTask = document.createElement('select');
        selectTask.classList.add('main__task-side__list');
        selectTask.classList.add('text');
        selectTask.setAttribute('name', 'taskList');

    let selectElement = document.createElement('option');
        selectElement.setAttribute('disabled','');
        selectElement.innerHTML = 'Choose your task: ';
        selectTask.appendChild(selectElement);    



    for (let i = 1; i <= localStorage.getItem('currentInPTask'); i++) {
        if(localStorage.getItem(`InP task ${i}`) === null) {
            continue;
        } else {
            let selectElement = document.createElement('option');
            selectElement.innerHTML = localStorage.getItem(`InP task ${i}`);
            selectElement.value = i;
            selectTask.appendChild(selectElement);
        }
    }

    let addTaskReadyBtn = document.createElement('button');
        addTaskReadyBtn.setAttribute('id', 'addTaskReady');
        addTaskReadyBtn.classList.add('task-side__add-task-btn');

    let addTaskIcon = document.createElement('img');
        addTaskIcon.setAttribute('src', 'addCard.svg');
        addTaskIcon.setAttribute('alt', 'add');

    let addTaskText = document.createElement('span');
        addTaskText.classList.add('add-card-btn__bottom-btn');
        addTaskText.classList.add('text');
        addTaskText.innerHTML = 'Add Task';

    addTaskReadyBtn.appendChild(addTaskIcon);
    addTaskReadyBtn.appendChild(addTaskText);

    form.appendChild(selectTask);
    form.appendChild(addTaskReadyBtn);

    newTaskSide.appendChild(form);

    finishedBlock.insertBefore(newTaskSide, addCardFinished);

    addTaskReadyBtn.addEventListener('click', function() {
        newTaskSide.removeChild(form);
        newTaskSide.innerHTML = localStorage.getItem(`InP task ${selectTask.value}`);

        currentReadyTask = localStorage.getItem('currentFinishedTask');
        currentReadyTask++;
        localStorage.setItem('currentFinishedTask',currentReadyTask);
        localStorage.setItem(`finished task ${localStorage.getItem('currentFinishedTask')}`, localStorage.getItem(`finished ready task ${selectTask.value}`));

        localStorage.removeItem(`InP task ${selectTask.value}`);
        newTaskSide.setAttribute('id', `n${currentReadyTask}`);

        document.querySelector(`#n${selectTask.value}`).remove();

        isSelectFinishedOpen = false;
    });
});