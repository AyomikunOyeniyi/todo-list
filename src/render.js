// import { projects } from "./project";
import { showTodoDialog } from "./dialog";
import { addProBtn } from ".";

const addTodoBtn = document.createElement('button');

// export default function makeItemCard (item, i) {

//     const holder = document.querySelector('.holder');

//     const card = document.createElement('div');
//     const cardHeader = document.createElement('h3');
//     cardHeader.textContent = `${item.title}`;
//     card.appendChild(cardHeader);

//     const cardText = document.createElement('p');
//     cardText.textContent = `${item.description}`;
//     card.appendChild(cardText);

//     const cardDate = document.createElement('p');
//     cardDate.textContent = `${item.due}`;
//     card.appendChild(cardDate);

//     const cardPriority = document.createElement('p');
//     cardPriority.textContent = `${item.priority}`;
//     card.appendChild(cardPriority);
//     card.classList.add('card');
//     card.classList.add(`card-${i}`);
//     holder.insertBefore(card, addTodoBtn);
// };

const proHolder = document.querySelector('.project-btns');

function showProjectBtn (name) {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('btn');
    projectBtn.textContent = `${name}`;

    projectBtn.addEventListener('click', () => {
        renderProject(name)
    });
    proHolder.insertBefore(projectBtn, addProBtn);
};

//function to show add todo button when content is rendered
function showButton () {
    const holder = document.querySelector('.holder');
    addTodoBtn.textContent = 'Add Todo';
    addTodoBtn.classList.add('btn');
    addTodoBtn.classList.add('add-btn');

    addTodoBtn.addEventListener('click', () => {
        showTodoDialog();
    });

    holder.appendChild(addTodoBtn);
};

//function to render inbox content
function renderInbox () {
    const heading = document.querySelector('.heading');
    const holder = document.querySelector('.holder');
    const title = document.createElement('h1');
    heading.textContent = '';
    holder.textContent = '';
    title.textContent = 'Inbox';
    heading.appendChild(title);
    showButton();
};

function renderProject (name) {
    const holder = document.querySelector('.holder');
    const heading = document.querySelector('.heading');
    const title = document.createElement('h1');
    heading.textContent = '';
    holder.textContent = '';
    title.textContent = `${name}`;
    heading.appendChild(title);
    showButton();
};

export {showProjectBtn, renderInbox, renderProject, showButton, addTodoBtn,}


