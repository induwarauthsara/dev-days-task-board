import { validateTaskTitle } from "./task-rules.js";

const form = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const errorMessage = document.querySelector("#task-error");
const taskList = document.querySelector("#task-list");
const remainingCount = document.querySelector("#remaining-count");
const clearCompletedButton = document.querySelector("#clear-completed");
const emptyState = document.querySelector("#empty-state");

function updateBoardSummary() {
  const tasks = [...taskList.querySelectorAll(".task-item")];
  const remaining = tasks.filter((task) => !task.querySelector(".task-checkbox").checked).length;

  remainingCount.textContent = remaining;
  remainingCount.parentElement.lastChild.textContent = remaining === 1 ? " remaining" : " remaining";
  taskList.hidden = tasks.length === 0;
  emptyState.hidden = tasks.length !== 0;
}

function clearError() {
  errorMessage.hidden = true;
  errorMessage.textContent = "";
  titleInput.removeAttribute("aria-invalid");
  titleInput.removeAttribute("aria-describedby");
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  titleInput.setAttribute("aria-invalid", "true");
  titleInput.setAttribute("aria-describedby", "task-error");
  titleInput.focus();
}

function createTaskItem(title) {
  const item = document.createElement("li");
  item.className = "task-item";

  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.className = "task-checkbox";
  checkbox.type = "checkbox";

  const customCheckbox = document.createElement("span");
  customCheckbox.className = "custom-checkbox";
  customCheckbox.setAttribute("aria-hidden", "true");

  const taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = title;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${title || "empty task"}`);

  label.append(checkbox, customCheckbox, taskText);
  item.append(label, deleteButton);
  return item;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearError();

  const result = validateTaskTitle(titleInput.value);
  if (!result.valid) {
    showError(result.message);
    return;
  }

  taskList.append(createTaskItem(result.title));
  titleInput.value = "";
  titleInput.focus();
  updateBoardSummary();
});

titleInput.addEventListener("input", clearError);

taskList.addEventListener("change", (event) => {
  if (event.target.matches(".task-checkbox")) updateBoardSummary();
});

taskList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".delete-button");
  if (!deleteButton) return;

  deleteButton.closest(".task-item").remove();
  updateBoardSummary();
});

clearCompletedButton.addEventListener("click", () => {
  taskList.querySelectorAll(".task-checkbox:checked").forEach((checkbox) => {
    checkbox.closest(".task-item").remove();
  });
  updateBoardSummary();
});

updateBoardSummary();
