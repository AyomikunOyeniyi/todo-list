import {createTodo,} from "./todo";
import "./style.css";
import {showTodoDialog, clearTodoDialog, closeTodoDialog, getTitle, showProjDialog, closeProjDialog, clearProjDialog, closeProjTodoDialog} from "./dialog";
import { showProjectBtn, renderInbox, renderProject, } from "./render";
import  Project  from "./project";

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

//functionality for the todo dialog buttons
let inbox = [];
let current = [];

// let mainProjects = [];

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createTodo(inbox);
    console.log(inbox);
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
function createProject(arg) {
    const newProject = new Project(arg);
    const projectArray = newProject.getProject();
    projectArray == []
    // mainProjects.push(projectArray);

    return {projectArray,}
};

const proTodoSubmitBtn = document.querySelector('.p-submit-btn');
proTodoSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createTodo(createProject(arg).projectArray);
    closeProjTodoDialog();
});


const proSubmitBtn = document.querySelector('.psubmit-btn');
proSubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getTitle();
    createProject(getTitle());
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