function clickHendaler() {
    fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(log => displayPOsts(log))

}

function displayPOsts(posts) {
    const postsContainer = document.getElementById('posts-container')
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
        <p>body: ${post.body} </p>
        <h3>Id- ${post.id}</h3>
        <h4>userId- ${post.userId}</h4>
        <h5>post: ${post.title}</h5>
        <p>title: ${post.title}</p>

        `;
        postsContainer.appendChild(postDiv);
        console.log(postDiv);
    }
}

clickHendaler();