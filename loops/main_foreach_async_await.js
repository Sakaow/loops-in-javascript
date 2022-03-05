const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fire the app
const initApp = async () => {
    useForEach(ids);
}

// event listeners 
document.addEventListener('DOMContentLoaded', initApp);

// POST function fetching the data from external API
const getPost = async () => {    
    return await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

// using forEach to iterate through the data
const useForEach = (ids) => {
    ids.forEach(async (id) => {
        const data = await getPost(id);
        console.log(data);
    });
    console.log("I'm not waiting for the data to be fetched");
}

/**
 * using Async/Await with forEach() method will return a mixed array of promises and values that doesn't return in order., 3,5,6,1,2,...
 * 
 * the message "I'm not waiting for the data to be fetched" will be printed before the data is fetched. because the forEach() method is not waiting for the data to be fetched.
 */