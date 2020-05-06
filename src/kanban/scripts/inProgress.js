let addCardInP = document.querySelector('#inPAddCard'),
    inPBlock = document.querySelector('#inPBlock'),
    currentInPTask,
    isSelectInPOpen = false;

window.addEventListener('load', function() {
    for (let i = 1; i <= localStorage.getItem('currentInPTask'); i++) {
        let oldTaskText = localStorage.getItem(`InP task ${i}`);
        
        if (oldTaskText === null) {
            continue;
        } else {
            let oldTask = document.createElement('div');
            oldTask.classList.add("task-side__main-side");
            oldTask.classList.add("text");
            oldTask.innerHTML = oldTaskText;
            oldTask.setAttribute('id', `n${i}`)
            inPBlock.insertBefore(oldTask, addCardInP);
        }
    }
    return 1;
});

addCardInP.addEventListener('click', function() {
    if (isSelectInPOpen || localStorage.getItem("currentReadyTask") === 0) {
        return;
    }

    isSelectInPOpen = true;

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



    for (let i = 1; i <= localStorage.getItem('currentReadyTask'); i++) {
        if(localStorage.getItem(`ready task ${i}`) === null) {
            continue;
        } else {
            let selectElement = document.createElement('option');
            selectElement.innerHTML = localStorage.getItem(`ready task ${i}`);
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

    inPBlock.insertBefore(newTaskSide, addCardInP);

    addTaskReadyBtn.addEventListener('click', function() {
        newTaskSide.removeChild(form);
        newTaskSide.innerHTML = localStorage.getItem(`ready task ${selectTask.value}`);

        currentReadyTask = localStorage.getItem('currentInPTask');
        currentReadyTask++;
        localStorage.setItem('currentInPTask',currentReadyTask);
        localStorage.setItem(`InP task ${localStorage.getItem('currentInPTask')}`, localStorage.getItem(`ready task ${selectTask.value}`));

        localStorage.removeItem(`ready task ${selectTask.value}`);
        newTaskSide.setAttribute('id', `n${currentReadyTask}`);

        document.querySelector(`#n${selectTask.value}`).remove();

        isSelectInPOpen = false;
    });
});