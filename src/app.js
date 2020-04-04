const sendData = document.getElementById('send-data');

sendData.addEventListener('click', createTask);

function createTask(e) {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    let task = [];

    const tasks = {
        name: name,
        description: description
    }

    if(task === null) {
        tasks.unshift(task);
    } else {
        task = [];
    }

    e.preventDefault();

    showTask();
}


function showTask() {
    const uiTask = document.getElementById('ui-task');
    const element = document.createElement('div');

    element.innerHTML = `
        <div class="card">
            <div class="card-content">
                <h3 class="title">${name.value}</h3>
                <p class="subtitle">${description.value}</p>
            </div>
        </div>
    
    `;

    uiTask.appendChild(element);
}


