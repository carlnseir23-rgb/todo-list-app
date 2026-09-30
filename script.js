// ---------- DOM references ----------
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const errorMessage = document.getElementById("error-message");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

// ---------- State ----------
// Each task: { id: number, text: string, completed: boolean }
let tasks = [];

// ---------- Rendering ----------
function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task-item";
  li.dataset.id = task.id;
  if (task.completed) {
    li.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", "Mark task as complete");

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  li.append(checkbox, text, deleteBtn);
  return li;
}

function renderTasks() {
  // Build every <li> from the tasks array, then replace the list contents
  // in one step so no old or duplicated elements are left behind.
  const taskElements = tasks.map(createTaskElement);
  taskList.replaceChildren(...taskElements);

  emptyState.hidden = tasks.length > 0;
}

// ---------- Validation feedback ----------
function showError(message) {
  errorMessage.textContent = message;
  taskInput.classList.add("invalid");
}

function clearError() {
  errorMessage.textContent = "";
  taskInput.classList.remove("invalid");
}

// ---------- Actions ----------
function addTask(text) {
  const trimmedText = text.trim();

  if (trimmedText === "") {
    showError("Please enter a task before adding it.");
    return;
  }

  tasks.push({
    id: Date.now() + Math.random(),
    text: trimmedText,
    completed: false,
  });

  clearError();
  renderTasks();
}

// ---------- Event handlers ----------
function handleFormSubmit(event) {
  // The form submits on both the Add button and the Enter key.
  // preventDefault stops the browser from reloading the page.
  event.preventDefault();
  addTask(taskInput.value);

  if (errorMessage.textContent === "") {
    taskInput.value = "";
  }
  taskInput.focus();
}

// ---------- Start ----------
taskForm.addEventListener("submit", handleFormSubmit);
taskInput.addEventListener("input", clearError);

renderTasks();
