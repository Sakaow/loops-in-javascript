const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fire the app
const initApp = async () => {
    // useForEach(ids);
    // getPostsConcurrently(ids);
    getPostsSerialized(ids);
}

// event listeners 
document.addEventListener('DOMContentLoaded', initApp);

// POST function fetching the data from external API
const getPost = async () => {    
    return await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

// using a higher order function reduce()
const getPostsSerialized = async (ids) => {
    await ids.reduce(async (acc, id) => {
        // waits for the previous item (promise) to complete
        await acc;
        // get the post, next item in the array
        const post = await getPost(id);
        console.log(post);
    }, Promise.resolve());
    console.log("I'll wait on the data to be fetched");
}

// using Promise.all and map()
const getPostsConcurrently = async (ids) => {
    const posts = await Promise.all(ids.map(async (id) => getPost(id)));   
    console.log(posts); 
    console.log("I'll wait on the data to be fetched");
}

/**
 * the Promise.all() method works faster than the others.
 * the downside is that it does fail if one of the promises fails.
 */
