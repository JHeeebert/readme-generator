// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js').default;

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the steps required to contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('README created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ==================
    Welcome to the README generator! Please answer the following questions:
    ==================`);

    inquirer.prompt(questions)
        .then(answers => {
            // console.log(answers); // for debugging purposes
            writeToFile("README.md", generateMarkdown(answers));
        });
}
// Function call to initialize app
init();
