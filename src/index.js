import {createTodo,} from "./todo";
import "./style.css";
import {showTodoDialog, clearTodoDialog, closeTodoDialog, getTitle, showProjDialog, closeProjDialog, clearProjDialog, } from "./dialog";
import { showProjectBtn, renderInbox, renderProject, } from "./render";

//functionality for the inbox button
const inboxBtn = document.querySelector('.inbox-btn');
inboxBtn.addEventListener('click', () => {
    renderInbox();
});
 //functionality for current button
const currentBtn = document.querySelector('.current-btn');
currentBtn.addEventListener('click', () => {
    renderProject('Current');
})
//functionality for add project button

//functionality for the todo dialog buttons
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let project = [];
    createTodo(project);
    closeTodoDialog();
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    closeTodoDialog();
});

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    clearTodoDialog();
});

//functionality for the project dialog buttons
const proSubmitBtn = document.querySelector('.psubmit-btn');
proSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getTitle();
    showProjectBtn(getTitle());
    closeProjDialog();
});

const addProBtn = document.querySelector('.pro-btn');
addProBtn.addEventListener('click', () => {
    showProjDialog();
});

const closeProBtn = document.querySelector('.pclose-btn');
closeProBtn.addEventListener('click', () => {
    closeProjDialog();
});

const clearProBtn = document.querySelector('.pclear-btn');
clearProBtn.addEventListener('click', () => {
    clearProjDialog();
});

export {addProBtn,}