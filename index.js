//required consts so that everything works
const fs = require('fs');
const inquirer = require('inquirer');
const { renderHTML } = require('./utils/generate-page');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//empty team array--each employee object is pushed into this array, which is then passed into the writeFile/copyFile functions
const team = [];

//initial employee array. called first, in order to have the subsequent role objects inherit these responses.
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
        type: 'input',
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

//managerQuestions, engineerQuestions, and InternQuestions are all role-specific arrays that are called inside of the inquirer.prompts in employeePrompt. If the user selects above that their role is 'Manager', they are then asked these questions below, because they are directly related to the manager role. The same functionality applies to both the Engineer and Intern roles.
const managerQuestions = [
    {
        type: 'input',
        name: 'office',
        message: 'please enter your office number.'
    },
    {
        type: 'list',
        name: 'continueConfirm',
        message: 'do you wish to add another employee?',
        choices: ['yes', 'no']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'please enter your github username.'
    },
    {
        type: 'list',
        name: 'continueConfirm',
        message: 'do you wish to add another employee?',
        choices: ['yes', 'no']
    }
]

const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'please enter the school that you attend.'
    },
    {
        type: 'list',
        name: 'continueConfirm',
        message: 'do you wish to add another employee?',
        choices: ['yes', 'no']
    }
]

//function that asks the initial questions for each employee. 
function employeePrompt() {
    inquirer.prompt(employeeInfo)
        .then(({ name, id, email, role }) => {
            //if the user selects that their role is 'Manager', a Manager object is created. This object takes the user input from the employeeInfo array and pushes it into the respective functions. The same functionality applies to the Engineer and Intern responses.
            if (role === 'manager') {
                const managerObj = new Manager();
                managerObj.name = name;
                managerObj.id = id;
                managerObj.email = email;
                managerObj.getRole = 'Manager';
                inquirer.prompt(managerQuestions)
                .then(({ office, continueConfirm }) => {
                    managerObj.office = office;
                    managerObj.continueConfirm = continueConfirm;
                    console.log(managerObj.getInfo());
                    if (continueConfirm === 'yes') {
                        team.push(managerObj);
                        return employeePrompt();
                    } else if (continueConfirm === 'no') {
                        team.push(managerObj);
                        return employeeList();
                    }
                })
            } else if (role === 'engineer') {
                const engineerObj = new Engineer();
                    engineerObj.name = name;
                    engineerObj.id = id;
                    engineerObj.email = email;
                    engineerObj.getRole = 'Engineer';
                inquirer.prompt(engineerQuestions)
                .then(({ github, continueConfirm }) => {
                    engineerObj.github = github;
                    engineerObj.continueConfirm = continueConfirm;
                    console.log(engineerObj.getInfo());
                    if (continueConfirm === 'yes') {
                        team.push(engineerObj);
                        return employeePrompt();
                    } else if (continueConfirm === 'no') {
                        team.push(engineerObj);
                        return employeeList();
                    }
                })
            } else if ( role === 'intern') {
                const internObj = new Intern();
                    internObj.name = name;
                    internObj.id = id;
                    internObj.email = email;
                    internObj.getRole = 'Intern';
                inquirer.prompt(internQuestions)
                .then(({ school, continueConfirm }) => {
                    internObj.school = school;
                    internObj.continueConfirm = continueConfirm;
                    console.log(internObj.getInfo());
                    if (continueConfirm === 'yes') {
                        team.push(internObj);
                        return employeePrompt();
                    } else if (continueConfirm === 'no') {
                        team.push(internObj);
                        return employeeList();
                    }
                })
            } else {
                console.log("select your role.");
            }
        }
)}


//writeFile and copyFile are used to render the HTML and subsequent style.css pages to the dist folder. 
function copyFile() {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
            }
            resolve({
                ok: true,
                message: 'style sheet created.'
            });
        });
    }
  )};
  

function writeFile() {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', renderHTML(team), err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'file created.'
            });
        });
    }
  ).then(() => {
      return copyFile();
  })
};

//this function is called inside of the employeePrompt function, if the user chooses to not add another employee to the team array. If that happens, this function returns writeFile and passes the team array to the function.
function employeeList() {
    return writeFile(team);
}

//initial function called when the user calls 'node index' at the command line. this handles the functionality for the inquirer prompts and object handling.
employeePrompt();