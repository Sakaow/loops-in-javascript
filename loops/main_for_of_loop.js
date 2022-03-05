const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fire the app
const initApp = async () => {
    // useForEach(ids);
    getPostsSerialized(ids);
}

// event listeners 
document.addEventListener('DOMContentLoaded', initApp);

// POST function fetching the data from external API
const getPost = async () => {    
    return await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

// using legular for...of loop to iterate through the data
const getPostsSerialized = async (ids) => {
    for (const id of ids){
        const data = await getPost(id);
        console.log(data);
    }
    
    console.log("I'll wait on the data to be fetched");
}

/**
 * using the alternative for...of loop to handle the data manipulation 
 * the for...of loop will wait the data to be fetched and
 * the result print out in ordered manner.
 */