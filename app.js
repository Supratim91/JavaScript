const age = 25;
if (age > 20) {
    console.log("You are over 20 years old.");
}
else {
    console.log("You are under 20 years old.");
}


const names = ['Rahul', 'Riya', 'Dev', 'Payal'];
if (names.length > 3) {
    console.log("Greater than 3");
}
else if (names.length < 2) {
    console.log("Less than 2");
}
else {
    console.log("Numbers of element in the array is : " + names.length);
}


const pwd = "P@ssword";
if (pwd.length >= 5 && pwd.indexOf('@') > -1) {
    console.log("Password is strong");
}
else if (pwd.length >= 8) {
    console.log("Password is long enough");
}
else {
    console.log("Password is not long enough");
}