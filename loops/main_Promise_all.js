const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fire the app
const initApp = async () => {
    // useForEach(ids);
    getPostsConcurrently(ids);
}

// event listeners 
document.addEventListener('DOMContentLoaded', initApp);

// POST function fetching the data from external API
const getPost = async () => {    
    return await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

// using legular Promise.all() and a higer function map() loop to iterate through the data
const getPostsConcurrently = async (ids) => {
    const posts = await Promise.all(ids.map(async (id) => getPost(id)));   
    console.log(posts); 
    console.log("I'll wait on the data to be fetched");
}

/**
 * the Promise.all() method works faster than the others.
 * the downside is that it does fail if one of the promises fails.
 */
