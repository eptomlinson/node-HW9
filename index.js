const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of this application?"
    },
    {
        type: "input",
        name: "git",
        message: "What is your github account name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a product description:",
    },
    {
        type: "input",
        name: "install",
        message: "Please enter installation instructions:"
    },
    {
        type: "input",
        name: "use",
        message: "Please enter usage information:"
    },
    {
        type: "input",
        name: "contrib",
        message: "Please enter contribution guidelines:"
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions:"
    }
];
// function to write README file
// function writeToFile(fileName, data) {
//     generateMarkdown(data)
// }

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(response => {
        fs.writeFile("markdowneyjr.md", generateMarkdown(response), (err, data) => {
            if (err) throw err;
        })
    })
// asks inquirer stuff 
// question about file name 
// writeToFile(fileName, dataQ?) 
}

// function call to initialize program
init();
