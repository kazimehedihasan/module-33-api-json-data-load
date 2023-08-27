function problem() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => problem1(data));
}

function problem1(problem2) {
  const ule = document.getElementById("usear-list");
  for (const use of problem2) {
    console.log(use.name);
    const li = document.createElement("li");
    li.textContent = use.name;
    ule.appendChild(li);
  }
}
