// import { projects } from "./project";
import { showTodoDialog, showProjTodoDialog } from "./dialog";
import { addProBtn } from ".";

const addTodoBtn = document.createElement('button');
const addProjTodoBtn = document.createElement('button');

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

function showProjAddTodo () {
    const holder = document.querySelector('.holder');
    addProjTodoBtn.textContent = 'Add Todo';
    addProjTodoBtn.classList.add('btn');
    addProjTodoBtn.classList.add('add-btn');

    addProjTodoBtn.addEventListener('click', () => {
        showProjTodoDialog();
    });

    holder.appendChild(addProjTodoBtn);
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
    showProjAddTodo();
};

export {showProjectBtn, renderInbox, renderProject, showButton, addTodoBtn,}


