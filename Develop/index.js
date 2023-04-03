// Imports node packages as well as the generateMarkdown file
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions that are prompted after user starts the program
const questions = inquirer.prompt([
    { // Asks for Github username
        type: 'input',
        message: 'What is your Github username?',
        name: 'Github',
    },
    { // Asks for email to be contacted with
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    { // Asks for project name
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
    },
    { // Asks for a description of project
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    { // Asks for what license the user wants
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
    },
    { // Asks for command to be run for dependencies
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation',
        default: 'npm i',
    },
    { // Asks for command to run tests
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test',
        default: 'npm test',
    },
    { // Asks for extra information that might be needed
        type: 'input',
        message: 'What does the user need to know about using this repo?',
        name: 'usage',
    },
    { // Asks for contribution info
        type: 'input',
        message: 'What does the user need to know about contributing to this repo?',
        name: 'contributing',
    }
]) .then(response => { writeToFile(response);});

// Writes the README.md file using the generateMarkdown file as well as catches any errors that occur throughout the program
function writeToFile(response) {
    fs.writeFile("README.md", generateMarkdown(response), (err) => err ? console.log(err) : console.log("Your README was successfully created!"));
}