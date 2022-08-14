// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections 
// entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application

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
        name: "problem-solve",
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
    {//ADDING TO LICENSE
        type:"input",
        message: "What is the current year?",
        name: "year",
    },
    {
        type:"input",
        message: "Please state your full name",
        name: "full-name",
    },
    {
        type:"confirm",
        message: "Did anyone help you build this project?",
        name: "contributor",
    },
    {
        type:"input",
        message: "What is the contributor's name?",
        name: "contributer-name",
    },
    {
        type:"input",
        message: "Please provide your contibutor's Github link.",
        name: "contributor-git",
    },
    {
        type:"input",
        message: "Please provide your Github username.",
        name: "git-user",
    },
    {
        type:"input",
        message: "Please provide your email.",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
