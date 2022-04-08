const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');
var team = [];

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

getInfo = function() {
    return {
        name: this.name,
        id: this.id,
        email: this.email,
        school: this.school,
        role: 'Intern'
    };
};

function internQuestions(team) {
    inquirer.prompt(
        {
        type: 'input',
        name: 'school',
        message: 'please enter the school that you attend.'
    })
    .then(({ school }) => {
        team.push(school);
        const teamObj = {...team};
        console.log(teamObj);
    })
}

module.exports = { Intern, internQuestions };