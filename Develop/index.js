// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using this repo?',
        name: 'information',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to this repo?',
        name: 'contribution',
    }
].then(response => {
    console.log(response);
    writeToFile(response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEString = '';
    fs.writeFile("README.md", READMEString, (err) => err ? console.log(error) : console.log("Your README was successfully created!"));
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();