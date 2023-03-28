const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = inquirer.prompt([
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
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
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
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to this repo?',
        name: 'contributing',
    }
]) .then(response => {
    writeToFile(response);
});

function writeToFile(response) {
    fs.writeFile("README.md", generateMarkdown(response), (err) => err ? console.log(err) : console.log("Your README was successfully created!"));
}