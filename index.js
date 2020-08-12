const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const choices = require("inquirer/lib/objects/choices");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// var readMeData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function (error) {
//     if (error) {
//         return console.log(error);
//     }
// });
// console.log(readMeData);

// array of questions for user
const questions = [
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please add a discription of your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Please give isntallation instructions:",
            name: "install"
        },
        {
            type: "input",
            message: "Usage Information:",
            name: "usage",
        },
        {
            type: "input",
            message: "Contribution Guidelines:",
            name: "contribution"
        },
        {
            type: "input",
            messsage: "Test Instructions:",
            name: "testInstruc"
        },
        {
            type: "checkbox",
            message: "Would you like a license for this repo?",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],
            name: "license"
        },
    ])
];

// function to write README file
// function writeToFile(data) {
//     const data = await questions;
//     try {
//         await writeFileAsync("README.md", generateMarkdown(data));
//         console.log("ReadMe file created!");
//     } catch (err) {
//         console.log(err);
//     }
// };

// function to initialize program
async function init() {
    // return writeToFile();
    const data = await questions;
    try {
        await writeFileAsync("README.md", generateMarkdown(data));
        console.log("ReadMe file created!");
    } catch (err) {
        console.log(err);
    }
};

// function call to initialize program
init();
