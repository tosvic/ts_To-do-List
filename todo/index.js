"use strict";
const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const taskList = document.querySelector('.task-list');
let tasks = [];
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        const taskDescription = document.createElement('span');
        taskDescription.textContent = task.description;
        taskItem.appendChild(taskDescription);
        const taskButtons = document.createElement('div');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(task.id));
        taskButtons.appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        taskButtons.appendChild(deleteButton);
        taskItem.appendChild(taskButtons);
        taskList.appendChild(taskItem);
    });
}
function addTask(description) {
    const newTask = {
        id: tasks.length + 1,
        description: description,
        completed: false
    };
    tasks.push(newTask);
    renderTasks();
    input.value = '';
}
function editTask(id) {
    const taskToEdit = tasks.find(task => task.id === id);
    const newDescription = prompt('Enter new task description:');
    if (newDescription) {
        taskToEdit.description = newDescription;
        renderTasks();
    }
}
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    renderTasks();
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') {
        addTask(input.value.trim());
    }
});
