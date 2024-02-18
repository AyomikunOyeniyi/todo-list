import ToDo from "./todo";
import "./style.css";
import showDialog from "./dialog";
import { getValues,} from "./dialog";
import { checkPriority } from "./priority";

//functionality for the addTodo button
const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
    showDialog();
})

//functionality for the dialog submit button
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getValues();
    const newTodo = new ToDo(getValues().todoTitle, getValues().todoDsc, getValues().todoDue, checkPriority());
    console.log(newTodo);
})