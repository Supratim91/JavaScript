// query selector
let para;
// para = document.querySelector("p");
// para = document.querySelector(".error");
para = document.querySelector("div.error");
console.log(para);
let paras = document.querySelectorAll('p');        // nodelist
console.log(paras[1]);
let errors = document.querySelectorAll('.error');
console.log(errors[1], errors[0]);


// getElementById
const title = document.getElementById('page-title');
console.log(title);


// getElementByClassName is alternative of line no. 9
const classErrors = document.getElementsByClassName('error');
console.log(classErrors[0]);


// getElementByTagName alternative of line no. 7
const parasByTag = document.getElementsByTagName('p');
console.log(parasByTag[1]);


let paraAll;
paraAll = document.querySelectorAll('p');
paraAll.forEach(p => {
    console.log(p.innerText);
    p.innerText = "New Text";
});


let classContent = document.getElementsByClassName('content');
Array.from(classContent).forEach(div => {
    div.innerHTML += `<h2>This is header content</h2>`;
});


let classContent1;
classContent1 = document.querySelector('.content1');
classContent1.innerHTML = `<h3>This is another header content no. 1</h3>`;


let anchorTag = document.querySelector('a');
anchorTag.innerText = "Yahoo";
console.log(anchorTag.getAttribute('href'));
anchorTag.setAttribute('href', 'https://www.yahoo.co.in');
console.log(anchorTag.getAttribute('href'));


let spanTag = document.getElementsByTagName('span');
Array.from(spanTag).forEach(span => {
    console.log(span.getAttribute('class'));
    span.setAttribute('class', 'success');
    console.log(span.getAttribute('class'));
    span.setAttribute('style', 'color:green');
});


// In <h1> tag (present on line no. 12 of html) using setAttribute add few styles
/* margin:50px;
color:crimson;
font-size:60px; */

// By using querySelector
/* let h1Tag = document.querySelector('h1');
console.log(h1Tag.getAttribute('id'));
h1Tag.setAttribute('style', 'margin:50px; color:crimson; font-size:60px;'); */

// By using getElementById
let h1Tag2 = document.getElementById('page-title');
console.log(h1Tag2.getAttribute('id'));
// h1Tag2.setAttribute('style', 'margin:50px; color:crimson; font-size:60px;');
h1Tag2.style.margin = '50px';
h1Tag2.style.color = "crimson";
h1Tag2.style.fontSize = '60px';


// study about classList property and how to add and remove classes using classList property 
const content = document.querySelector('p');
console.log(content.classList);
content.classList.add('error');
content.classList.remove('new');