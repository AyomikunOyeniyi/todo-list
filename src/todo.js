import { getValues,} from "./dialog";
import { checkPriority } from "./priority";
import makeItemCard from "./render";

export default class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.due = dueDate;
        this.priority = priority;
    }
};

function createTodo (array) {
    getValues();
    const newItem = new ToDo(getValues().todoTitle, getValues().todoDsc, getValues().todoDue, checkPriority());
    array.push(newItem);

    function renderTodo () {
        for (let i = 0; i < array.length; i++) {
            let item = array[i];
            makeItemCard(item);
        }
    };
    renderTodo();
};


export {createTodo,}