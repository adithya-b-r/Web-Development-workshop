var counter = 1;

const add = () => {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task != "")
    display(task)

  taskInput.value = ""
}

const display = (task) => {
  const taskCont = document.getElementById("taskContainer");

  if (counter == 1)
    taskCont.innerHTML = ""

  // Storing id name in variable
  const currentId = `task${counter}`;

  // Creating Element
  let taskBody = document.createElement('div');
  let taskName = document.createElement('p');
  let deleteIcon = document.createElement('i');

  // Adding ClassNames
  taskBody.classList = "w-full h-14 bg-gray-100 flex items-center justify-between px-4 py-7 gap-2"
  taskName.classList = "font-semibold text-gray-700 cursor-pointer"
  deleteIcon.classList = "ri-delete-bin-line text-white bg-red-500 px-2 py-1 rounded-lg text-xl cursor-pointer"

  // Adding id to taskBody
  taskBody.id = currentId

  // Adding textContent to p tag
  taskName.textContent = task

  // Adding Event Listeners
  taskName.addEventListener("click", () => taskDone(currentId))
  deleteIcon.addEventListener("click", () => deleteTask(currentId))

  // Inserting taskName and deleteIcon to taskBody
  taskBody.appendChild(taskName);
  taskBody.appendChild(deleteIcon);

  // Inserting taskBody inside taskContainer
  taskCont.appendChild(taskBody);

  // Just for Reference
  // taskCont.innerHTML += `
  //   <div id="task${counter}" class="w-full h-14 bg-gray-100 flex items-center justify-between px-4 py-7 gap-2">
  //     <p onclick="taskDone('task${counter}')" class="font-semibold text-gray-700 cursor-pointer">${task}</p>
  //     <i onclick="deleteTask('task${counter}')" class="ri-delete-bin-line text-white bg-red-500 px-2 py-1 rounded-lg text-xl cursor-pointer"></i>
  //   </div>
  // `;

  counter++;
}

const deleteTask = (taskId) => {
  document.getElementById(taskId).remove();
}

const taskDone = (taskId) => {
  const task = document.getElementById(taskId);
  const task_p = task.querySelector('p');

  task_p.classList.toggle("text-green-600")
  task_p.classList.toggle("line-through")

  // console.log(task_p);
  // console.log(taskId);
}