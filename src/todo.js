import { getValues,} from "./dialog";
import { checkPriority } from "./priority";
import makeItemCard from "./render";
import { showButton, addTodoBtn, } from "./render";

export default class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.due = dueDate;
        this.priority = priority;
    }
};
function createProjTodo (array) {
    getValues();
    const newItem = new ToDo(getValues().todoTitle, getValues().todoDsc, getValues().todoDue, checkPriority());
    array.push(newItem);

    const holder = document.querySelector('.holder');
    holder.textContent = '';
    showButton();
    function makeItemCard () {
        for (let i = 0; i < array.length; i++) {
            let item = array[i];

            const card = document.createElement('div');
            const cardHeader = document.createElement('h3');
            cardHeader.textContent = `${item.title}`;
            card.appendChild(cardHeader);
            
            const cardText = document.createElement('p');
            cardText.textContent = `${item.description}`;
            card.appendChild(cardText);
            
            const cardDate = document.createElement('p');
            cardDate.textContent = `${item.due}`;
            card.appendChild(cardDate);
            
            const cardPriority = document.createElement('p');
            cardPriority.textContent = `${item.priority}`;
            card.appendChild(cardPriority);
            card.classList.add('card');
            card.classList.add(`card-${i}`);

            const rmvTodo = document.createElement('button');
            rmvTodo.textContent = 'Done';
            rmvTodo.addEventListener('click', () => {
                array.splice(`${i}`, 1);
                console.log(array);
                holder.textContent = '';
                showButton();
                makeItemCard();
                });
                card.appendChild(rmvTodo);
                holder.insertBefore(card, addTodoBtn);
            };
        };
    makeItemCard();
}


function createTodo (array) {
    getValues();
    const newItem = new ToDo(getValues().todoTitle, getValues().todoDsc, getValues().todoDue, checkPriority());
    array.push(newItem);

    const holder = document.querySelector('.holder');
    holder.textContent = '';
    showButton();
    function makeItemCard () {
        for (let i = 0; i < array.length; i++) {
            let item = array[i];

            const card = document.createElement('div');
            const cardHeader = document.createElement('h3');
            cardHeader.textContent = `${item.title}`;
            card.appendChild(cardHeader);
            
            const cardText = document.createElement('p');
            cardText.textContent = `${item.description}`;
            card.appendChild(cardText);
            
            const cardDate = document.createElement('p');
            cardDate.textContent = `${item.due}`;
            card.appendChild(cardDate);
            
            const cardPriority = document.createElement('p');
            cardPriority.textContent = `${item.priority}`;
            card.appendChild(cardPriority);
            card.classList.add('card');
            card.classList.add(`card-${i}`);

            const rmvTodo = document.createElement('button');
            rmvTodo.textContent = 'Done';
            rmvTodo.addEventListener('click', () => {
                array.splice(`${i}`, 1);
                console.log(array);
                holder.textContent = '';
                showButton();
                makeItemCard();
                });
                card.appendChild(rmvTodo);
                holder.insertBefore(card, addTodoBtn);
            };
        };
    makeItemCard();
};


export {createTodo,}