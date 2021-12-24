console.log("Hello World!");
let email = 'supratim.paul0391@gmail.com';
console.log(email);
const fname = "Supratim";
const lname = "Paul";
// const fullname = fname + " " + lname;
const fullname = `${fname} ${lname}`;       // String literal `hello world, ${fname}`
console.log(fullname);

// Getting individual character
console.log(fullname[2]);           // returns character in that index of the string
console.log(fullname.length);       // returns length of the string
console.log(fullname.toUpperCase());        // returns uppercase of the string
console.log(fullname.toLowerCase());        // returns lowercase of the string
console.log("Found @ in", email + ": ", email.indexOf('@'));       // returns index of the @ of the string
console.log(`Found @ in ${email}: ${email.indexOf('@')}`);         // returns index of the @ of the string

let mail = 'mario@thenetninja.co.uk';
let result = "";
// result = mail.lastIndexOf('n');
// result = mail.slice(2, 15);
// result = mail.slice(-7, -4);
// result = mail.slice(0, 2);
// result = mail.substring(0, 5);
// result = mail.replace('m', 'w');
result = mail.replaceAll('n', 'w');
console.log(result);