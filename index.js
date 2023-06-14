// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name: 'description',
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
        choices: ['MIT', 'GPL', 'GPL 3.0', 'Unlicense', 'None']
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) return console.log(err);{
        console.log('README created successfully!');
    }});
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ==================
    Welcome to the README generator! Please answer the following questions:
    ==================`)
    inquirer.prompt(questions)
    .then((data) => {
          writeToFile('README.md', generateMarkdown(data));
      }); 
}
// Function call to initialize app
init();


