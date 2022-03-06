## JavaScript

### forEach - What's it good for?

- keeps the scope of the loop clean to the block of forEach's scope.
- allows you to do something with each value in the array.
- re-use rhe array's values within the forEach loop without changing the original array.

### Async fetch request

- use **fetch** to make an async request to APIs

### forEach with Async Await is **_BAD_**

- the forEach() method does not wait for the async request (each promise) to resolve before moving on to the next task.
- the loop finishes iterating before the async request is resolved ( promise takes a while to resolve )
- an error is thrown if the async request fails.

### Alternative #1: traditional **_for loop_**

- use a traditional **for loop** to iterate over the array.
- the for loop will wait for the async request to resolve before moving on to the next task.
- index is explicitly passed into the callback function.

### Alternative #2: **for...of** loop

### Alternative #3: Promise.all with **_map_**

### Alternative #4: A different **_reduce_**
