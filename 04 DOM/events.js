// ------- get all list items
const list = document.getElementById("main-list");

for (const li of list.children) {
    li.onmouseenter = () => {
        li.classList.add('large');
    }
    li.onmouseleave = () => {
        li.classList.remove('large');
    }
}

// ------ working with forms
const addBtn = document.querySelector('form button[type="submit"]');
const nameInput = document.querySelector('form input');

addBtn.onclick = (event) => {
    // avoid page refreshing
    event.preventDefault();

    // read value from input
    const name = nameInput.value;

    // data validation
    if (!name) {
        alert("Can not add empty item!");
        return;
    }

    // add new item to list
    const newItem = document.createElement('li');
    newItem.textContent = name;
    newItem.classList.add('large');
    newItem.setAttribute("title", "Test");
    newItem.onmouseenter = () => {
        newItem.classList.add('large');
    }
    newItem.onmouseleave = () => {
        newItem.classList.remove('large');
    }
    newItem.ondblclick = function () {
        this.remove();
    }

    list.append(newItem);

    //list.innerHTML += `<li class="large" title="Test">${name}</li>`;
};

