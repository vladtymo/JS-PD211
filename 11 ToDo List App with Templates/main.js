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

    const data = {
        ...task,
        deadline: task.deadline.toLocaleString()
    }

    console.log(data);

    // Використання шаблону та додавання на сторінку
    const source = document.getElementById('todoItemTemplate').innerHTML;
    const template = Handlebars.compile(source);
    const html = template(data);

    list.innerHTML += html;
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