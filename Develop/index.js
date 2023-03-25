// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'input',
        message: '',
        name: '',
    }
].then(response => {
    console.log(response);
    writeToFile(response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const READMEString = '';
    fs.writeFile("README.md", READMEString, (err) => err ? console.log(error) : console.log("Your README was created successfully!"));
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();