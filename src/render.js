// import { projects } from "./project";
import { showTodoDialog } from "./dialog";
import { addProBtn } from ".";

const addTodoBtn = document.createElement('button');

export default function makeItemCard (item) {
    const holder = document.querySelector('.content');

    const card = document.createElement('div')
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

    holder.insertBefore(card, addTodoBtn);
};

const holder = document.querySelector('.project-btns');

function showProjectBtn (name) {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('btn');
    projectBtn.textContent = `${name}`;

    projectBtn.addEventListener('click', () => {
        renderProject(name)
    });
    holder.insertBefore(projectBtn, addProBtn);
};

//function to show add todo button when content is rendered
function showButton () {
    const content = document.querySelector('.content');
    addTodoBtn.textContent = 'Add Todo'
    addTodoBtn.classList.add('btn');
    addTodoBtn.classList.add('add-btn');

    addTodoBtn.addEventListener('click', () => {
        showTodoDialog();
    });
    content.appendChild(addTodoBtn)
};

//function to render inbox content
function renderInbox () {
    const content = document.querySelector('.content');
    const heading = document.createElement('h1');
    content.textContent = '';
    heading.textContent = 'Inbox';
    content.appendChild(heading);
    showButton();
};

function renderProject (name) {
    const content = document.querySelector('.content');
    const heading = document.createElement('h1');
    content.textContent = '';
    heading.textContent = `${name}`;
    content.appendChild(heading);
    showButton();
};

export {showProjectBtn, renderInbox, renderProject, }


