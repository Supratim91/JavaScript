// primitive value
const score1 = 50;
const score2 = score1;
console.log("Score 1 = " + score1 + ", " + "Score 2 = " + score2);

// reference value
let user1 = {
    name: "Shubash",
    age: 50
};
let user2 = user1;
console.log("User 1 = ", user1, ", User 2 = ", user2);
user1.name = "Ravi";
console.log("User 1 = ", user1, ", User 2 = ", user2);
let user3 = {};
Object.assign(user3, user1);
user1.age = 40;
console.log("User 1 = ", user1, ", User 3 = ", user3);