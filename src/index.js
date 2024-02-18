import {createTodo, renderTodo,} from "./todo";
import "./style.css";
import {showDialog, clearDialog, closeDialog} from "./dialog";
// import { renderTodo,} from "./todo";

//functionality for the addTodo button
const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
    showDialog();
})

//functionality for the dialog submit button
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createTodo();
    renderTodo();
    closeDialog();
});