const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(engineerName, engineerId, engineerEmail, engineerGithub, continueConfirm) {
        super(engineerName, engineerId, engineerEmail)
        this.github = engineerGithub;
        this.continueConfirm = continueConfirm;
    }

    getGithub() {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }

    getInfo = function() {
        return {
            engineerName: this.name,
            engineerId: this.id,
            engineerEmail: this.email,
            engineerGithub: this.github,
            continueConfirm: this.continueConfirm,
            engineerRole: 'Engineer'
        }
    }

    getContinue() {
        return this.continueConfirm;
    }
}

module.exports = Engineer;