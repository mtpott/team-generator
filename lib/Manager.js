const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-page');
var team = [];

class Manager extends Employee {
    constructor(managerName, managerId, managerEmail, managerOffice, continueConfirm) {
        super(managerName, managerId, managerEmail)
        this.office = managerOffice;
        this.continueConfirm = continueConfirm;
    }
    
    getOffice() {
        return this.office;
    }

    getRole() {
        return 'Manager';
    }

    getInfo = function() {
        return {
            managerName: this.name,
            managerId: this.id,
            managerEmail: this.email,
            managerOffice: this.office,
            continueConfirm: this.continueConfirm,
            managerRole: 'Manager'
        };
    }

    getContinue() {
        return this.continueConfirm;
    }
}

module.exports = Manager;