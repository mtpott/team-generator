const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;