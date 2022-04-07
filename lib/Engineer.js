const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }
}

function engineerQuestions(response) {
    inquirer.prompt(
        {
            type: 'input',
            name: 'github',
            message: 'please enter your github username.'
        }
    )
    .then(response => {
        console.log(response);
    })
}


module.exports = { Engineer, engineerQuestions };