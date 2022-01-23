let user = {
    name: "Shaon",
    age: 40,
    email: "shaon01@gmail.com",
    location: "Chennai",
    blogs: [{ title: "Gardening Rules", likes: 30 }, { title: "Cooking Methods", likes: 20 }],
    login: function () {
        console.log("The user logged in.");
    },
    logout: function () {
        console.log("The user logged out.");
    },
    logBlogs() {
        console.log(`${this.name} has written following blogs:`);
        this.blogs.forEach(blog => {
            // console.log(blog);
            console.log(`${blog.title} has ${blog.likes} likes.`);

        });
    }
};
console.log(user);
console.log(user.age);
console.log(user.name, user.blogs);
user.age = 35;
user["name"] = "Amit";
console.log(user);
console.log(typeof user);
user.login();
user.logout();
user.logBlogs();
console.log(this);