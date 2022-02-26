const article = document.querySelector('article');
console.log(article.children);      // nodeList
Array.from(article.children).forEach(element => {
    element.classList.add('article-element');
});

const h2Tag = document.querySelector('h2');
console.log(h2Tag.parentElement);
console.log(h2Tag.parentElement.parentElement);
console.log(h2Tag.nextElementSibling);
console.log(h2Tag.previousElementSibling);

// chaining
// h2Tag nextElementSibling parentElement children
console.log(h2Tag.nextElementSibling.parentElement.children);

// chaining
// h2Tag previousElementSibling parentElement children
console.log(h2Tag.previousElementSibling.parentElement.children);