const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
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
];

// LOGIC IF USING FUNCTION FOR QUESTIONS

// function promptUser() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             message: "What is the Title of your project?",
//             name: "title"
//         },
//         {
//             type: "input",
//             message: "Please add a discription of your project:",
//             name: "description"
//         },
//         {
//             type: "input",
//             message: "Please give isntallation instructions:",
//             name: "install"
//         },
//         {
//             type: "input",
//             message: "Usage Information:",
//             name: "usage",
//         },
//         {
//             type: "input",
//             message: "Contribution Guidelines:",
//             name: "contribution"
//         },
//         {
//             type: "input",
//             messsage: "Test Instructions:",
//             name: "testInstruc"
//         },
//         {
//             type: "checkbox",
//             message: "Would you like a license for this repo?",
//             choices: [
//                 "Apache",
//                 "MIT",
//                 "ISC",
//                 "None"
//             ],
//             name: "license"
//         },
//     ])
// };

// function to initialize program
async function init() {
    // LOGIC IF USING ARRAY CONST

    return inquirer.prompt(questions);

    // LOGIC IF USING FUNCTION FOR QUESTIONS

    // const data = await promptUser();
    // console.log(data);
    // try {
    //     const fileName = "README.md";
    //     await writeFileAsync(`${fileName}`, generateMarkdown(data));
    //     console.log("ReadMe file created!");
    // } catch (err) {
    //     console.log(err);
    // }
};

// function call to initialize program
init()
// LOGIC IF USING ARRAY CONST

.then(function(data){
    const fileName = "README.md";
    return writeFileAsync(`${fileName}`, generateMarkdown(data));
})
.then(function(){
    console.log("README Creation Successful!!!")
})
.catch(function(err){
    console.log(err);
})
