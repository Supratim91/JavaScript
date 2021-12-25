let ninjas = ['Amit', 'Arif', 'Dev'];        // Array of string
let ages = [25, 50, 60];      // Array of numbers
let random = ['Amit', 25, 'Dev', 60];        // Array of mix of string & number
ninjas[1] = "Raj";       
console.log(ninjas[1]);       // returns character in that index of the string
console.log(ages[2]);
console.log(random.length);
console.log(ninjas.indexOf('Arif'));         // returns -1 because it not exist
let res = "";
res = ninjas.push('Rina');
res = ninjas.pop();
let newNinjas = ['Maria', 'Riya'];
// res = ninjas.concat(['Maria', 'Riya']);
res = ninjas.concat(newNinjas);
res = ninjas.splice(2, 1);
res = ninjas.join(',');
console.log("res", res);
console.log("ninjas", ninjas);