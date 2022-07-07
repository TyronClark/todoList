const form = document.querySelector('#todo-form');
const input = document.querySelector('#new-todo');
const list = document.querySelector('#list');
const submit = document.querySelector('#submit-todo')

//on submit take input and display as new list elements
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toDo = input.value;
    const newLI = document.createElement('LI');
    const image = document.createElement('img');
    image.src = "/images/delete-icon.png"
    newLI.innerText = toDo;
    list.append(newLI);
    list.appendChild(image);
    //clear input value
    document.getElementById('new-todo').value='';
    
});

//on submit clear input value
form.addEventListener('submit', () => {
    
});
