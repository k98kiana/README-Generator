// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections 
// entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {//TITLE
        type:"input",
        message: "What is your project's title?",
        name: "project",
    },
    {//DESCRIPTION-MOTIVATION
        type:"input",
        message: "What was the motivation for this project?",
        name: "motivation",
    },
    {//DESCRIPTION-PROBLEM SOLVING
        type:"input",
        message: "What problem is this project solving?",
        name: "problem_solve",
    },
    {//DESCRIPTION-LEARN
        type:"input",
        message: "What did you learn from building this project?",
        name: "learn",
    },
    {//INSTALLATION
        type:"input",
        message: "What are the steps required to install this project?",
        name: "installation",
    },
    {//USAGE
        type:"input",
        message: "What are the steps to use the project?",
        name: "usage",
    },
    {
        type:"confirm",
        message: "Do you want to include a license?",
        name: "license",
    },
    {//ADDING TO LICENSE
        type:"input",
        message: "What is the current year?",
        name: "year",
    },
    {//NAME
        type:"input",
        message: "Please state your full name",
        name: "full_name",
    },
    {//CONTRIBUTOR CONFIRM
        type:"confirm",
        message: "Did anyone help you build this project?",
        name: "contributor",
    },
    {//CONTRIBUTOR NAME
        type:"input",
        message: "What is the contributor's name?",
        name: "contributername",
        when: (answers) => answers.contributor === true,
    },
    {//CONTRIBUTOR LINK
        type:"input",
        message: "Please provide your contibutor's Github link.",
        name: "contributorgit",
        when: (answers) => answers.contributor === true,
    },
    {// USERNAME
        type:"input",
        message: "Please provide your Github username.",
        name: "gituser",
    },
    {// EMAIL
        type:"input",
        message: "Please provide your email.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile("README.md", generateMarkdown(answers), (err) =>
     err ? console.log (err) : console.log("Written to File!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile(answers);
});
}

// Function call to initialize app
init();
