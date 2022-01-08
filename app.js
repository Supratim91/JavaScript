// for loop
/* for (let i = 0; i <= 10; i++) {
    console.log(i);
} */

const names = ['Ravi', 'Rahul', 'Amit'];
/* for (let index = 0; index < names.length; index++)
{
    const element = names[index];
    console.log(index, element);
} */

// while loop
/* let i = 8;
while (i >= 5) {
    console.log("From 8 to", i);
    i--;
} */

/* let index = 0;
while (index < names.length) {
    const element = names[index];
    console.log(index, element);
    index++;
} */

// do-while loop
/* let i = 5;
do {
    console.log("value of i is :", i);
    i++;
} while (i < 8); */

/* let index = 0;
do {
    const element = names[index];
    console.log(index, element);
    index++;
} while (index < names.length); */

// for-each loop
// names.forEach((element, index) => { console.log(element, index) });
/* function names(element, index) {
    console.log(element, index);
} */
// names.forEach((element, index) => { console.log(element, index) });

// for-of loop
/* for (const [index, element] of names.entries()) {
    console.log(index, element);
} */

// Default method
/* for (const iterator of names) {
    console.log(iterator);
} */

// for-in loop
let obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}
for (const key in names) {
    if (Object.hasOwnProperty.call(names, key)) {
        const element = names[key];
        console.log(key, element);
    }
}