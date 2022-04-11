const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');
var team = [];

class Intern extends Employee {
    constructor(internName, internId, internEmail, internSchool, continueConfirm) {
        super(internName, internId, internEmail)
        this.school = internSchool;
        this.continueConfirm = continueConfirm;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }


    getInfo = function() {
        return {
            internName: this.name,
            internId: this.id,
            internEmail: this.email,
            internSchool: this.school,
            continueConfirm: this.continueConfirm,
            internRole: 'Intern'
        };
    }

    getContinue() {
        return this.continueConfirm;
    }
};

module.exports = Intern;