const title = "Bestsellers of 2021";
const author = "Mario";
const likes = 30;
// The blog called "Bestsellers of 2021" by Mario has 30 likes
console.log(`The blog called "${title}" by ${author} has ${likes} likes`);

let html = `
                <h2>${title}</h2>
                <p>${author}</p>
                <span>This blog has ${likes} likes</span>
           `;
console.log(html);