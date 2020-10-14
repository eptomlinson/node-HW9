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
        name: "test",
        message: "What is your favorite activity?"
    },
    {
        type: "input",
        name: "quiz",
        message: "What time is it?"
    }
];

inquirer.prompt(questions)
    .then(response => {
        fs.writeFile("markdowneyjr.md", generateMarkdown(response), (err, data) => {
            if (err) throw err;
        })
    })

// function to write README file
// function writeToFile(fileName, data) {
//     generateMarkdown(data)
// }

// function to initialize program
function init() {
// asks inquirer stuff 
// q? about file name 
// writeToFile(fileName, dataQ?) 
}

// function call to initialize program
init();
