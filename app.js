// function definition
/* function greet(name) {
    console.log("Hello World!", name);
} */

const greet = (name) => { console.log("Hello World!", name); }        // arrow function

// function call
greet("Rahul");        // entry point
greet();
greet('');
console.log("================");




// function definition 
/* const speak = function (name = 'People', time = 'Day') {
    console.log("Good", time + "!", name);
} */

const speak = (name = 'People', time = 'Day') => { console.log("Good", time + "!", name); }     // arrow function

// function call
speak("Shaun", "Night");        // entry point
speak("Rajesh");
speak(undefined, "Afternoon");
speak(null, "Evening");
speak();
speak('');
console.log("================");




// bill([10, 15, 30], 0.2) using for-each loop
/* function bill(products, tax) {
    let total = 0;
    products.forEach(element => {
        total += element + (element * tax);
    });
    return total;
}
console.log("Total = ", bill([10, 15, 30], 0.2));
console.log("================"); */


// bill([10, 15, 30], 0.2) using for-of loop
/* function bill(products, tax) {
    let total = 0;
    for (const element of products) {
        total = (total + element) + (element * tax);
    }
    return total;
}
console.log("Total = ", bill([10, 15, 30], 0.2));
console.log("================"); */


// bill([10, 15, 30], 0.2) using for-in loop
function bill(products, tax) {
    let total = 0;
    for (const iterator in products) {
        if (Object.hasOwnProperty.call(products, iterator)) {
            const element = products[iterator];
            total += element + (element * tax);
        }
    }
    return total;
}
console.log("Total = ", bill([10, 15, 30], 0.2));
console.log("================");


// convert this function bill([10, 15, 30], 0.2) using for-of loop to an arrow function
/* const bill = (products, tax) => {
    let total = 0;
    for (const element of products) {
        total = (total + element) + (element * tax);
    }
    return total;
}
console.log("Total = ", bill([10, 15, 30], 0.2));
console.log("================"); */


// convert this function bill([10, 15, 30], 0.2) using for-each loop to an arrow function
/* const bill = (products, tax) => {
    let total = 0;
    products.forEach(element => {
        total = (total + element) + (element * tax);
    });
    return total;
}
console.log("Total = ", bill([10, 15, 30], 0.2));
console.log("================"); */




/* Write a function to calculate area of a circle where radius is 5,
also check the output of the function with radius 2.5
Formulae: Area = PI * r ** 2
Convert this function to an arrow function */
function circle(area) {
    let PI = 22 / 7, radius = 5;
    let r = radius;
    area = PI * r ** 2;
    console.log("Area of the circle is = " + area);
}
circle();
console.log("================");