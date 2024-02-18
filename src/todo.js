import { getValues,} from "./dialog";
import { checkPriority } from "./priority";
import { projects,} from "./project";
import makeItemCard from "./render";

export default class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.due = dueDate;
        this.priority = priority;
    }
};

function createTodo () {
    getValues();
    const newItem = new ToDo(getValues().todoTitle, getValues().todoDsc, getValues().todoDue, checkPriority());
    projects[0].push(newItem);
};

function renderTodo () {
    for (let i = 0; i < projects.length; i++) {
        for (let project in projects[i]) {
            let item = projects[i][project];
            makeItemCard(item);
        }
    }
};


export {createTodo, renderTodo,}