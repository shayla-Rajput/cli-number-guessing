#! /usr/bin/env node
import inquirer from "inquirer";
//1: computer will generate a random number
//2:user input for guessing number
//3:compare user input with computer generated number and show result
//const randomnumber = 13;
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
//console.log(answers);
if (answers.userguessednumber === randomnumber) {
    console.log("congratulations you guess the right number");
}
else
    console.log("you guessed wrong number");
