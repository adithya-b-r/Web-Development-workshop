# Simple ToDo App

## Project Overview
A simple ToDo List application built with HTML, CSS (Tailwind CSS), and vanilla JavaScript.

## Key JavaScript Concepts

### 1. DOM Manipulation
```javascript
// Create element
let taskBody = document.createElement('div');

// Add to DOM
taskCont.appendChild(taskBody);

// Remove element
document.getElementById(taskId).remove();

// Query elements
const task_p = task.querySelector('p');
```

### 2. Event Handling
```javascript
// Inline event handler
<button onclick="add()">Add</button>

// addEventListener approach
deleteIcon.addEventListener("click", () => deleteTask(currentId));
```

### 3. Core Functions

#### Adding a Task
```javascript
function add() {
  const task = taskInput.value.trim();
  if (task != "") display(task);
  taskInput.value = "";
}
```

#### Displaying Tasks
```javascript
function display(task) {
  // Create elements
  let taskBody = document.createElement('div');
  let taskName = document.createElement('p');
  
  // Add classes
  taskBody.classList = "task-style";
  taskName.textContent = task;
  
  // Add event listeners
  taskName.addEventListener("click", () => taskDone(currentId));
  
  // Append to DOM
  taskBody.appendChild(taskName);
  taskCont.appendChild(taskBody);
}
```

#### Deleting a Task
```javascript
function deleteTask(taskId) {
  document.getElementById(taskId).remove();
}
```

#### Marking as Complete
```javascript
function taskDone(taskId) {
  const task_p = document.getElementById(taskId).querySelector('p');
  task_p.classList.toggle("text-green-600");
  task_p.classList.toggle("line-through");
}
```

## Quick Reference Table

| Action | Code Snippet |
|--------|--------------|
| Get element | `document.getElementById("taskInput")` |
| Create element | `document.createElement('div')` |
| Add class | `element.classList.add('className')` |
| Toggle class | `element.classList.toggle('className')` |
| Add event listener | `element.addEventListener('click', handler)` |
| Remove element | `element.remove()` |
| Get input value | `inputElement.value` |
| Check empty string | `if (str.trim() != "")` |

## Workshop Takeaways
1. DOM manipulation without libraries
2. Event handling patterns
3. Dynamic element creation
4. State management basics