const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, year, full_name) {
  let section;
  if (license) {
    fs.writeFile("LICENSE.txt", 
    `MIT License

Copyright (c) ${year} ${full_name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    (error) => {
      error ? console.log(error) : console.log("License file created.");
    }
    );
  } else {
    section;
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.project} ${renderLicenseSection(
    answers.license,
    answers.year,
    answers.full_name
  )}

## Table of Contents

*[Description](#description)
*[Installation](#insallation)
*[Usage](#usage)
*[Contributor](#contributor)
*[Questions](#questions)

## Description
${answers.motivation}
${answers.problem_solve}
${answers.learn}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributor
${answers.contributor}
[${answers.contributorname}] (https://github.com/${answers.contributorgit})

## Questions
If you have any questions, please contact me below:
* [${answers.gituser}] (https://github.com/${answers.gituser})
* Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
