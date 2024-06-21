// ----------- send HTTP request
// fetch(url, { options })

const list = document.getElementById('user-list')
const gitHubApi = "https://api.github.com/users";

async function loadUser() {

    const response = await fetch(gitHubApi);
    console.log("Status:", response.status); // 200 OK

    const data = await response.json();
    console.log(data);

    for (const i of data) {
        list.innerHTML += `<a href="#" class="list-group-item list-group-item-action">[${i.id}] - ${i.login}</a>`;
    }
}

loadUser();
