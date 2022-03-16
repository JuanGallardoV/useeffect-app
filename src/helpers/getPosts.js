//? Juan Gallardo 16-03-2022
const getPosts = async (userId) => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const res = await fetch(url);
    const posts = await res.json();
    return posts;
}

export default getPosts;