window.onload = () => {
    load();
}

// -------- get form controls
const list = document.querySelector('#todo-list');

const form = document.forms.taskForm;

const titleIn = form.elements.title;
const deadlineIn = form.elements.deadline;
const flaggedCb = form.elements.flagged;

let tasks = [];

form.onsubmit = (e) => {
    e.preventDefault();

    let task = {
        title: titleIn.value,
        deadline: deadlineIn.value,
        flagged: flaggedCb.checked
    }
    tasks.push(task);
    save();

    addItemToList(task);
}

function addItemToList(task) {
    list.innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${task.title}</div>
                                ${task.deadline.toLocaleString()}
                            </div>
                            ${task.flagged ? '<span class="text-danger"><i class="bi bi-flag-fill"></i></span>' : ''}
                            </li>`;
}

function save() {
    // JSON.stringify() - convert onbject to JSON string
    // JSON.parse() - convert JSON string to JS object

    localStorage.setItem("data-list", JSON.stringify(tasks));
}

function load() {
    tasks = JSON.parse(localStorage.getItem("data-list"));

    for (const i of tasks) {
        addItemToList(i);
    }
}