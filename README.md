# Employee Information Tracker

## Table of Contents
### -[Description](#description)
### -[Technologies](#technologies)
### -[Usage](#usage)
### -[Testing](#test)
### -[Video](#video)
### -[Questions](#questions)
### -[Licensing](#license)

## Description

For this project, we were tasked with creating an employee tracker using Node.js. After prompting the user with various general questions (such as their name, email address, and role), the user is prompted with more specific questions based on their role in the company. For example: if they are an Engineer, they are asked to provide their GitHub username. Once the Engineer has filled out the questions, a new Engineer object is created, and it takes on the answers to their questions as the values of the object. This object is pushed to an empty Team array, which is used to render the HTML later on in the code.

After the whole team has added their information and the entire Team array has been completed, that array is passed to the writeFile function, which will render the HTML on the screen, as seen in generate-page.js (A style.css page is also created, using the copyFile function). This page includes the functionality for creating each specific employee, as well as the entirety of what will become index.html. These are created using a template literal. Inside of the renderHTML function, the specific employee functions are called by a for loop--if the specific object in the Team array has the role value of 'Engineer', then the createEngineer function is added to the HTML. These will work the same for all the employee types, regardless of whatever combination of employees used; the object must contain the correct employee role in order to render that specific HTML.

## Technologies

Technologies used: javascript, node.js, inquirer, fs, and jest. 

## Usage

Please call 'node index' at the command line to access the inquirer prompts, as per project guidelines.

## Testing

There were multiple tests created in order to create this project--Employee, Manager, Engineer, and Intern are all objects and as per project guidelines, if you run 'npm run test' at the command line, all tests will pass.

## Video
### Please follow the link below for a walkthrough of how the Employee Generator works:

https://drive.google.com/file/d/1CgTY-PyWtHrqWCiV9el_F-ZK0hrZtIbi/view

### Questions

Please reach out to me via GitHub with any questions or concerns: 

https://github.com/mtpott
