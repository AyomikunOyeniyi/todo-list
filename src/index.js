import {createTodo, renderTodo,} from "./todo";
import "./style.css";
import {showTodoDialog, clearTodoDialog, closeTodoDialog} from "./dialog";
import { showProjectBtn } from "./render";

//functionality for the addTodo button
const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
    showTodoDialog();
});

//functionality for the dialog submit button
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createTodo();
    renderTodo();
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