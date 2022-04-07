const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office)
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;