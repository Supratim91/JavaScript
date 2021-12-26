console.log(true, false, "true", "false");
let email = "supratim.paul0391@gmail.com";
let names = ["Mario", "Ted", "Ken"];
let result;
// result = email.includes('@');
result = names.includes("ken");
console.log(result);

// comparison operators
let age = 25;
console.log(age == 25);       // returns true
console.log(age == 30);       // returns false
console.log(age != 30);       // returns true
console.log(age > 20);        // returns true
console.log(age < 20);        // returns false
console.log(age <= 25);       // returns true
console.log(age >= 25);       // returns true
console.log(age > 25);        // returns false
console.log(age < 25);        // returns false

console.log('===========');
let name = 'shaun';
console.log(name == 'shaun');       // returns true
console.log(name == 'Shaun');       // returns false
console.log(name != 'Shaun');       // returns true
console.log(name != 'shaun');       // returns false
console.log(name > 'crystal');      // returns true
console.log(name > 'Shaun');        // returns true
console.log(name > 'Crystal');      // returns true
console.log(name >= 'Shaun');       // returns true
console.log(name >= 'Crystal');     // returns true
console.log(name <= 'Shaun');       // returns false
console.log(name <= 'Crystal');     // returns false
console.log(name < 'Shaun');        // returns false
console.log(name < 'Crystal');      // returns false

console.log('===========')
// Loose comparison or loosely type
console.log(age == 25);         // returns true
console.log(age == "25");       // returns true
console.log(age != 25);         // returns false
console.log(age != "25");       // returns false
// Strict comparison or strict type
console.log(age === 25);         // returns true
console.log(age === "25");       // returns false
console.log(age !== 25);         // returns false
console.log(age !== "25");       // returns true

console.log('==========');
// Loose comparison or loosely type
console.log(age == 24);         // returns false
console.log(age == "24");       // returns false
console.log(age != 24);         // returns true
console.log(age != "24");       // returns true
// Strict comparison or strict type
console.log(age === 24);         // returns false
console.log(age === "24");       // returns false
console.log(age !== 24);         // returns true
console.log(age !== "24");       // returns true