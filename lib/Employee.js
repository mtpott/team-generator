// class Employee {
//     constructor (name, id, email) {
//         this.name = name;
//         //this.id += 1;
//         this.email = email;
//         //this.office = Math.floor(Math.random() * 20);
//     }

    // getName() {
    //     return this.name;
    // }
    
    // getId() {
    //     return this.id;
    // }
    
    // getEmail() {
    //     return this.email;
    // }

    // getRole() {
    //     return 'Employee';
    // }
//}

function Employee(name, email) {
    this.name = name;
    this.email = email;
}
module.exports = Employee;