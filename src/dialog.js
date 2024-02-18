function getValues () {
    const todoTitle = document.querySelector('#title').value;
    const todoDsc = document.querySelector('#description').value;
    const todoDue = document.querySelector('#due').value;
    const pryOne = document.querySelector('#priority-1');
    const pryTwo = document.querySelector('#priority-2');
    const pryThree = document.querySelector('#priority-3');

    return {todoTitle, todoDsc, todoDue, pryOne, pryTwo, pryThree}
};

const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

function showDialog() {
    dialog.showModal();
};

function closeDialog () {
    form.reset();
    dialog.close();
};

function clearDialog () {
    form.reset();
};

export {getValues, closeDialog, clearDialog, showDialog}