const people = ["Rahul", "Ravi", "Dev", "Sreelagna", "Shaon"];
let html = "";
let logPerson = (person, index) => {
    html += `<li>${person}, ${index}</li>`;
    console.log(`${person} is in ${index} position.`);
}
people.forEach(logPerson);
const ul = document.querySelector(".people");       // query selector
ul.innerHTML = html;
// ul.innerText = html;