function getValues () {
    const todoTitle = document.querySelector('#title').value;
    const todoDsc = document.querySelector('#description').value;
    const todoDue = document.querySelector('#due').value;
    const pryOne = document.querySelector('#priority-1');
    const pryTwo = document.querySelector('#priority-2');
    const pryThree = document.querySelector('#priority-3');

    return {todoTitle, todoDsc, todoDue, pryOne, pryTwo, pryThree}
};

let todoPry;
//check if running this in another module means it doesn't have access to todoPry
function checkPriority () {
    if (getValues().pryOne.checked) {
        todoPry = getValues().pryOne.value;
    } else if (getValues().pryTwo.checked) {
        todoPry = getValues().pryTwo.value;
    } else {
        todoPry = getValues().pryThree.value;
    };
    return todoPry;
};


export {getValues, checkPriority,}