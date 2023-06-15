// Packages needed for this application and the generateMarkdown function
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
        default: `YOUR GITHUB USERNAME`
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: `YOUR EMAIL ADDRESS`
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is your project\'s name?',
        default: `YOUR PROJECT NAME`

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
        default: 'THIS IS A PROJECT DESCRIPTION'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: `NPM INSTALL OR NPM I`
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage:',
        default: `NODE INDEX.JS OR NPM START`
    },
    {
        type: 'confirm',
        name: 'usagePreview',
        message: 'Would you like to include a video or image to display how your app performs?',
        default: false
    },
    {
        type: 'input',
        name: 'usagePath',
        message: 'Please provide the relative path to your usage video or image "DO NOT USE SPACES IN YOUR FILE NAME":',
        when: (answers) => answers.usagePreview === true ? true : false,
        default: 'THIS IS A PATH'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the steps required to contribute to your project?',
        default: `FORK THE REPO AND CREATE A PULL REQUEST OR OPEN AN ISSUE ON THE GITHUB REPO PAGE AND I WILL ADDRESS IT ASAP`
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run tests:',
        default: `NPM TEST`
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GPL', 'GPL 3.0', 'Unlicense', 'None'],
        default: 'None'
    },
    {
        type: 'list-multiple',
        name: 'badges',
        message: 'What badges would you like to include?',
        choices: ['Node', 'NPM', 'Javascript', 'ES6', 'jQuery', 'Bootstrap', 'HTML', 'CSS', 'React', 'Express.js', "inquirer", "None" ],
        multiple: true,
    },
];

        

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) return console.log(err); {
            console.log('README created successfully!');
        }
    });
}

// Function to initialize app
function init() {
    console.log(`
    ==================
    Welcome to the README generator! Please answer the following questions:
    ==================`)
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('NEWREADME.md', generateMarkdown(data));
        });
    }      
// Function call to initialize app
init();


