
const someElement = document.querySelector('.inputClassHere') as HTMLInputElement;
console.log(someElement.value);


someElement.addEventListener('click', (event: Event) => {
    // event
    const target = event.target as HTMLInputElement; // its correct
    console.log(target.value);
})