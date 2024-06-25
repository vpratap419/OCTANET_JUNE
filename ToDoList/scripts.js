document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const dueDate = document.getElementById('dueDate');
    const priority = document.getElementById('priority');
    const category = document.getElementById('category');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskDueDate = dueDate.value;
        const taskPriority = priority.value;
        const taskCategory = category.value;

        addTask(taskText, taskDueDate, taskPriority, taskCategory);
        taskForm.reset();
    });

    function addTask(text, dueDate, priority, category) {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${text} - ${dueDate} - ${priority} - ${category}</span>
            <div>
                <button class="complete" onclick="completeTask(this)">Complete</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    }

    window.completeTask = function(button) {
        const li = button.parentElement.parentElement;
        li.classList.toggle('completed');
    }

    window.deleteTask = function(button) {
        const li = button.parentElement.parentElement;
        taskList.removeChild(li);
    }
});
