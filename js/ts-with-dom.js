"use strict";
const someElement = document.querySelector('.inputClassHere');
console.log(someElement.value);
someElement.addEventListener('click', (event) => {
    // event
    const target = event.target; // its correct
    console.log(target.value);
});
