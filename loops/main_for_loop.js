const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fire the app
const initApp = async () => {
    // useForEach(ids);
    getPostsSerialized(ids);
}

// using forEach to iterate through the data "BAD"
const useForEach = (ids) => {
    ids.forEach(id => {
        console.log(id);
    })
}

// event listeners 
document.addEventListener('DOMContentLoaded', initApp);

// POST function fetching the data from external API
const getPost = async () => {    
    return await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

// using legular for loop to iterate through the data
const getPostsSerialized = async (ids) => {
    for(let i = 0; i < ids.length; i++) {
        const data = await getPost(ids[i]);
        console.log(data);
    };
    console.log("I'll waiting on the data to be fetched");
}

/**
 * using the legular for loop to handle the data manipulation 
 * the for loop will wait for the data to be fetched and
 * the result print out in ordered manner.
 */