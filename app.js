// HTML button create "Track me", JS eventlistener add click
// Asynchronous method handling using callback
const button = document.querySelector('button');
button.addEventListener('dblclick', trackUserHandler);
function trackUserHandler() {
    navigator.geolocation.getCurrentPosition((positionData) => {
        console.log(positionData);
    }, (error) => {
        console.log(error);
    });
}


// Asynchronous method handling using promise-then
const getPosition = () => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((positionData) => {
            resolve(positionData);
            // reject("Error occurred");
        }, (error) => {
            // reject("Error occurred", error);
        });
    });
    return promise;
}
function trackUserHandlerPromise() {
    getPosition()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log("Finally called");
        });
}
button.addEventListener('dblclick', trackUserHandlerPromise);


// Asynchronous method handling using async/await
async function trackUserHandlerAsync() {
    try {
        const data = await getPosition();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
button.addEventListener('dblclick', trackUserHandlerAsync);


// Another example of promise-then
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.log(error);
    });


// Another example of above coding by using of async/await
async function getTODOS() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
getTODOS();



/* console.log("One");
console.log("Two");
// Asynchronous Function
setTimeout(() => {
    console.log("Callback fire");
}, 0000);
function handler() {
    console.log("Callback fire");
}
setTimeout(handler, 2000);
console.log("Three");
console.log("Four"); */