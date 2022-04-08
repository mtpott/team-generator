// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


//required consts so that everything works
const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-page');
const { engineerQuestions } = require('./lib/Engineer');
const page = require('./src/page.js');


//empty team array--this will be used to push new members to, in order to populate the html
var team = [];

const teamObj = {...team};

const employeeInfo = [
    {
        type: 'input',
        name: 'name',
        message: 'please enter your name.',
        validate: employeeName => {
            if (employeeName) {
                return true;
            } else {
                console.log('you must enter your name to continue.');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'please enter your employee ID',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('you must enter your employee ID to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'please enter your email address.',
        validate: employeeEmail => {
            if (employeeEmail) {
                return true;
            } else {
                console.log('you must enter your email to continue.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'please choose your position from the list below:',
        choices: ['manager', 'engineer', 'intern'],
    }
]


function managerQuestions(team) {
    inquirer.prompt(
    {
        type: 'number',
        name: 'office',
        message: 'please enter your office number.'
    }
)
    .then(({ office }) => {
        team.push(office);
        const manager = {...team};
        console.log(manager);
    })
    .then(teamObj => {
        return writeFile(teamObj);
    })
    // .then(manager => {
    //     return copyFile(teamObj);
    // })
}

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


inquirer.prompt(employeeInfo)
    .then(({ name, id, email, role }) => {
        if (role === 'manager') {
            team.push(name, id, email, role);
            console.log(team);
            return managerQuestions(team);
        } else if (role === 'engineer') {
            team.push(name, id, email, role);
            return engineerQuestions();
        } else {
            team.push(name, id, email, role);
            return internQuestions();
        }
    });