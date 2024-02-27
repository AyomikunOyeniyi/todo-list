function getValues () {
    const todoTitle = document.querySelector('#title').value;
    const todoDsc = document.querySelector('#description').value;
    const todoDue = document.querySelector('#due').value;
    const pryOne = document.querySelector('#priority-1');
    const pryTwo = document.querySelector('#priority-2');
    const pryThree = document.querySelector('#priority-3');

    return {todoTitle, todoDsc, todoDue, pryOne, pryTwo, pryThree}
};

function getPtValues () {
    const todoTitle = document.querySelector('#p-title').value;
    const todoDsc = document.querySelector('#p-description').value;
    const todoDue = document.querySelector('#p-due').value;
    const pryOne = document.querySelector('#p-priority-1');
    const pryTwo = document.querySelector('#p-priority-2');
    const pryThree = document.querySelector('#p-priority-3');

    return {todoTitle, todoDsc, todoDue, pryOne, pryTwo, pryThree}
}

const todoDialog = document.querySelector('.todo-dialog');
const todoForm = document.querySelector('.todo-form');

function showTodoDialog() {
    todoDialog.showModal();
};

function closeTodoDialog () {
    todoForm.reset();
    todoDialog.close();
};

function clearTodoDialog () {
    todoForm.reset();
};

const projTodoDialog = document.querySelector('.pt-dialog');
const projTodoForm = document.querySelector('.pt-form');

function showProjTodoDialog () {
    projTodoDialog.showModal();
};

function closeProjTodoDialog () {
    projTodoForm.reset();
    projTodoDialog.close();
};

function clearProjTodoDialog () {
    projTodoForm.reset();
};

//for project dialog
function getTitle () {
    let projectTitle = document.querySelector('#proj-name').value;
    return projectTitle;
};

const projectDialog = document.querySelector('.proj-dialog');
const projectForm = document.querySelector('.proj-form');

function showProjDialog() {
    projectDialog.showModal();
};

function closeProjDialog() {
    projectForm.reset();
    projectDialog.close();
};

function clearProjDialog() {
    projectForm.reset();
};

export {getValues, closeTodoDialog, clearTodoDialog, showTodoDialog, getTitle, 
        showProjDialog, closeProjDialog, clearProjDialog, getPtValues, showProjTodoDialog, closeProjTodoDialog, clearProjTodoDialog,}