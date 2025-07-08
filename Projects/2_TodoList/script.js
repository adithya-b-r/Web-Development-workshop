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

  taskCont.innerHTML += `
    <div id="task${counter}" class="w-full h-14 bg-gray-100 flex items-center justify-between px-4 py-7 gap-2">
      <p onclick="taskDone('task${counter}')" class="font-semibold text-gray-700">${task}</p>
      <i onclick="deleteTask('task${counter}')" class="ri-delete-bin-line text-white bg-red-500 px-2 py-1 rounded-lg text-xl cursor-pointer"></i>
    </div>
  `;

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