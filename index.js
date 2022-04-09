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
//const { writeFile, copyFile } = require('./utils/generate-page');
//const page = require('./src/page.js');
const writeFile = require('./src/page');

//empty team array--each employee object is pushed into this array, which is then passed into the writeFile/copyFile functions
const team = [];

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

function managerQuestions(arrObj) {
    inquirer.prompt(
    {
        type: 'number',
        name: 'office',
        message: 'please enter your office number.'
    }
)
    .then(({ office }) => {
        arrObj.office = office;
        })
    .then((response) => {
        inquirer.prompt( {
            type: 'list',
            name: 'continue',
            message: 'do you wish to add another employee?',
            choices: ['yes', 'no']
        })
        if (response === 'yes' ) {
            console.log('yes was selected.')
            return employeePrompt();
        } else if (response === 'no') {
            console.log('no was selected.')
            //return employeeList(arrObj);
        } else {
            console.log('choose yes or no')
        }
    })
}

function engineerQuestions(arrObj) {
    inquirer.prompt(
        {
            type: 'input',
            name: 'github',
            message: 'please enter your github username.'
        }
    )
    .then(({ github }) => {
        arrObj.github = github;
    })
    .then(() => {
        inquirer.prompt({
                type: 'confirm',
                name: 'continue',
                message: 'do you wish to add another employee?'
            })
            let confirm;
            if (confirm) {
                return employeePrompt();
            } else {
                return employeeList();
            }
        })
}

function internQuestions(arrObj) {
    inquirer.prompt(
        {
        type: 'input',
        name: 'school',
        message: 'please enter the school that you attend.'
        })
    .then(({ school }) => {
        arrObj.school = school;
    })
    .then(() => {
        inquirer.prompt({
                type: 'confirm',
                name: 'continue',
                message: 'do you wish to add another employee?' 
            })
            let confirm;
            if (confirm) {
                return employeePrompt();
            } else {
                employeeList(arrObj);
            }
        })
    }
// here we are asking the user to enter genereal info. then, role=value should be checked for === manager, intern, engineer. if there is a match, then call the appropriate functions. 

//function that asks the initial questions for each employee. 
function employeePrompt() {
    inquirer.prompt(employeeInfo)
        .then(({ name, id, email, role }) => {
            //this object takes the user input from the employeeInfo array and pushes it into the respective functions
            const arrObj = new Object();
                arrObj.name = name;
                arrObj.id = id;
                arrObj.email = email;
                arrObj.role = role;
            console.log(arrObj);
            if (role === 'manager') {
                return managerQuestions(arrObj);
            } else if (role === 'engineer') {
                return engineerQuestions(arrObj);
            } else if ( role === 'intern') {
                return internQuestions(arrObj);
            } else {
                console.log("Role not identified. Please try again.");
            }
        }
    )}

function readFile(arrObj) {
    return new Promise((resolve, reject) => {
        fs.readFile('./dist/index.html', (err, data) => {
            if (err) { 
                reject(err);
                return;
            }
            resolve({ 
                ok: 'true',
                message: 'file read.'
            })
        })
    })
}

function employeeList(arrObj) {
    team.push(arrObj);
    console.log(team);
    return writeFile(team);
}

employeePrompt();