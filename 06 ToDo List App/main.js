// -------- get form controls
const list = document.querySelector('#todo-list');

const form = document.forms.taskForm;

const titleIn = form.elements.title;
const deadlineIn = form.elements.deadline;
const flaggedCb = form.elements.flagged;

form.onsubmit = (e) => {
    e.preventDefault();

    let task = {
        title: titleIn.value,
        deadline: new Date(deadlineIn.value),
        flagged: flaggedCb.checked
    }

    list.innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">${task.title}</div>
                                ${task.deadline}
                            </div>
                            ${task.flagged ? '<span class="text-danger"><i class="bi bi-flag-fill"></i></span>' : ''}
                            </li>`;
}