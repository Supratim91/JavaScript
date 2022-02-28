const name = {
    firstName: "John",
    lastName: "Doe"
};
const name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
};
printFullName = function (hometown, state) {
    // console.log(this.firstName + " " + this.lastName);
    console.log(`${this.firstName} ${this.lastName} lives in ${hometown}, ${state}`);
}
// name.printFullName();
// printFullName.call(name2, "Mumbai", "India");        // context 1st, then other parameters
// printFullName.call(name, "California", "US");

// printFullName.apply(name, ["California", "US"]);        // context 1st, then 2nd argument array with parameters

const printMyName = printFullName.bind(name2, "Mumbai", "India");       // context 1st, then other parameters
printMyName();