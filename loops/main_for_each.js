const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fire the app
const initApp = async () => {
    useForEach(ids);
}

// event listeners 
document.addEventListener('DOMContentLoaded', initApp);

// POST function fetching the data from external API
const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return data;
    // return await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
}

// using forEach to iterate through the data
const useForEach = (ids) => {
    ids.forEach(id => {
        console.log(id);
    })
}

/**
 *  forEach() method allows us to loop through the array items and do something with each item.
 * So, we can log each item to see the output.
 * But forEach() method doesn't return anything.
 * That immeditely makes it less useful than the other higher order functions like map(), filter() and reduce().
 * 
 */