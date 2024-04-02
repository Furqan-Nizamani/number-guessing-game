#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will gunrate a number. DONE.

// 2) user input for guessing number, DONE.

// 3) compare user input and computer gunrated number, and show result.

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number bettwen 1 to 6: ",
    },
]);

if(answers.userGuessNumber === randomNumber){
    console.log("Congtratulation! you guess right number.");
    
} else {
    console.log("Oho you guess wrong number");
    
}
