import ToDo from "./todo";
import { projects } from "./create-project";

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

    holder.appendChild(card);
};



