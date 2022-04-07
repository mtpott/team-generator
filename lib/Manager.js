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

function managerQuestions() {
    inquirer.prompt(
    {
        type: 'input',
        name: 'office',
        message: 'please enter your office number.'
    }
)
    .then(response => {
        console.log(response);
    })
}

module.exports = { Manager, managerQuestions };