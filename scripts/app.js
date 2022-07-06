const form = document.querySelector('#todo-form');
const input = document.querySelector('#new-todo');
const list = document.querySelector('#list');
const submit = document.querySelector('#submit-todo')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const toDo = input.value;
    const newLI = document.createElement('LI');
    newLI.innerText = toDo;
    list.append(newLI);
});

form.addEventListener('submit', () => {
    document.getElementById('new-todo').value='';
});
