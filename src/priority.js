import { getValues, } from "./dialog";

let todoPry;

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

export {checkPriority,}