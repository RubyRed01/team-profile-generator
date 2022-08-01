// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./generateMarkdown')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const teamArray = [];

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         name: 'managers-name',
//         message: 'What is the name of the team manager?',
//     },
//     {
//         type: 'input',
//         name: 'manager-id',
//         message: 'What is the employee ID number for the team manager?',
//     },
//     {
//         type: 'input',
//         name: 'manager-email',
//         message: 'What is the email for the team manager?',
//     },
//     {
//         type: 'input',
//         name: 'office-number',
//         message: 'What is the office number for the team manager?',
//     },
//     {
        
//     }
// ];

// inquirer
//     .prompt(questions)
//     .then((answers) => {
//         // Use user feedback for... whatever!!
//         console.log("Here are your chosen answers.", answers)
//         writeToFile("test.md", generateMarkdown({...answers}))
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//         } else {
//             // Something else went wrong
//         }
//     });
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

function buildEngineer(){
    //tbd
    inquirer.prompt([{
        type: 'input',
        name: 'engineerName',
        message: 'Please give the engineer name.',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Please give the engineer ID.',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please give the team manager email.',
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'Please give the team manager office number.',
    },
]).then(answers => {
    let mgr = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
    teamArray.push(mgr);
    console.log('teamArray = ', teamArray, 'mgr = ', mgr );
    addTeamMembers();
})
}

function buildIntern(){
    //tbd
}

function buildTeam(){
    //tbd
}

function addTeamMembers(){
    inquirer.prompt([{
        type: 'list',
        name: 'memberSelect',
        message: 'Which type of member would you like to select?',
        choices: [
            'Engineer',
            'Intern',
            'No one',
        ]
    },
   
]).then(answers => {
    switch(answers.memberSelect){
        case 'Engineer':
            buildEngineer();
            break;

        case 'Intern':
            buildIntern();
            break;
        
        default:
            buildTeam();
    }
})
}

function createManager() {
    inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: 'Please give the team manager name.',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please give the team manager ID.',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please give the team manager email.',
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'Please give the team manager office number.',
    },
]).then(answers => {
    let mgr = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
    teamArray.push(mgr);
    console.log('teamArray = ', teamArray, 'mgr = ', mgr );
    addTeamMembers();
})
}

createManager()