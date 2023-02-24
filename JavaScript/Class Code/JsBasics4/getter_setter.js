// object ke ander getter and setter define karte hai

let person = {
    fName : 'Love',
    lName : 'Babbar',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        // if(typeof value !== String) {
        //     throw new Error("You have not sent a string");
        // }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

person.fullName = "ankit kumar" // setting value of my choice


// try {
//     person.fullName = "ankit kumar";
// }
// catch (e) {
//     alert(e);
// }

console.log(person.fullName);