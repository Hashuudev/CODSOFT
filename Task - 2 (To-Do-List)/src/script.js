"use strict";

const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task}</span>
            <div class="actions">
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
    taskInput.value = "";
  }
}

function editTask(index) {
  const updatedTask = prompt("Edit task:", tasks[index]);
  if (updatedTask !== null) {
    tasks[index] = updatedTask;
    saveTasksToLocalStorage();
    renderTasks();
  }
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    saveTasksToLocalStorage();
    renderTasks();
  }
}

addTaskButton.addEventListener("click", addTask);
renderTasks();

function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask !== "") {
    tasks.push(newTask);
    saveTasksToLocalStorage();
    renderTasks();
    taskInput.value = "";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

taskInput.addEventListener("keypress", handleKeyPress);
