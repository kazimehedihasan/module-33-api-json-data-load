
function buttonClick() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
  }



  function lodeUser() {
    const bata = 'https://jsonplaceholder.typicode.com/posts'
    fetch(bata)
    .then(re => re.json())
    .then(k => display(k))
  }

  function display(k) {
    console.log(k);
  }