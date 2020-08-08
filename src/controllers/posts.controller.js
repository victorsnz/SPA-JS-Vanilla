import view from '../views/posts.html'

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement("div")
    divElement.innerHTML = view;

    const postsElement = divElement.querySelector('#posts');
    let totalPost = divElement.querySelector('#total');

    const posts = await getPosts();
    totalPost.innerHTML = posts.length;

    posts.forEach(post => {
        postsElement.innerHTML += `
            <li>
                <h4> ${post.title} </h4>
                <p> ${post.body} </p>
            </li>
        `
    })
    
    return divElement;
};