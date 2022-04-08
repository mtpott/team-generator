const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-page');
var team = [];

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

    getInfo = function() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            office: this.office,
            role: 'Manager'
        };
    };
}

module.exports = Manager;