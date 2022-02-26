const btn = document.querySelector('button');
btn.addEventListener('click', (ev) => {
    console.log("Button is clicked");
    console.log(ev.target.innerText);
});

const listItems = document.querySelectorAll('li');
listItems.forEach(element => {
    element.addEventListener('dblclick', (ev) => {
        console.log("From lists clicked:" + ev.target.innerText);
        console.log(element);
        ev.target.innerText = "Gardening";
    });
});