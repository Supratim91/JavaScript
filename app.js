const user1 = {
    user: "John Doe",
    email: "johndoe92@",
    login() { console.log("User logged in: "); },
    logout: function () { console.log("User logged out: "); }
};

class User {
    constructor(userName, mail) {
        this.user = userName;
        this.email = mail;
        this.score = 0;
    };
    login() {
        console.log(`${this.user} logged in. `);
    };
    logout = function () {
        console.log(`${this.user} logged out. `);
    };
    initscore = function () {
        this.score += 1;
        console.log(`${this.user} has scored ${this.score}.`);
    };
};
const user2 = new User("Shaon", "shaon01@gmail.com");
const user3 = new User("Abhijit", "abhijit02@gmail.com");
user2.login();
user3.logout();
user2.initscore();
user3.initscore();

class Admin extends User {
    constructor(userName, mailId) {
        super(userName, mailId);
    };
    delete(user) {
        users = users.filter(u => {
            return (u.user !== user.user);
        });
    };
};
const user4 = new Admin("Rohit", "rohit03@gmail.com");
let users = [user1, user2, user3, user4];
user4.delete(user2);
console.log(users);