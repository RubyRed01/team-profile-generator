// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./generateMarkdown')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const dist_dir = path.resolve(__dirname, 'dist');
const dist_path = path.join(dist_dir, 'generated_team.html')
const generateHtml = require('./src/generateHtml')

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
function buildTeam(){
fs.writeFileSync(dist_path, generateHtml(teamArray));
}


function buildEngineer(){
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
        name: 'engineerEmail',
        message: 'Please give the engineer email.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please give the engineer Github.',
    },
]).then(answers => {
    let engr = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
    teamArray.push(engr);
    console.log('teamArray = ', teamArray, 'engr = ', engr );
    addTeamMembers();
})
}

function buildIntern(){
    inquirer.prompt([{
        type: 'input',
        name: 'internName',
        message: 'Please give the intern name.',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Please give the intern ID.',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please give the intern email.',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please give the intern school.',
    },
]).then(answers => {
    let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
    teamArray.push(intern);
    console.log('teamArray = ', teamArray, 'intern = ', intern );
    addTeamMembers();
})
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