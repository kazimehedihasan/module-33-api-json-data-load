function todusClick() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => todosCOll(data))
    
}

function todosCOll(todos) {
    const todusContainer = document.getElementById('todo-container')
    for (const todu of todos){
        const todoDiv = document.createElement('div');
        
        todoDiv.innerHTML = `
<h3> title: ${todos.title}</h3>
<p>user: ${todos.userId}</p>
<P>Is completed: ${todos.completed === true ? 'complete': 'not complete'}</P>
        `;
todusContainer.appendChild(todoDiv);
    }
    
}