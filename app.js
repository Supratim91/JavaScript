const frm = document.getElementsByTagName('form');
// const username = document.getElementById('username');
Array.from(frm).forEach(form => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        // console.log("Form submitted: ", username.value);
        console.log("Form submitted: ", form.username.value);
    });
});