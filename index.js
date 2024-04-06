#! /usr/bin/env node
import inquirer from "inquirer";
//Computer will generate random number
//User input form guessing number
//Compare user input with computer generated number and show result
//const randomNumber=13; 
//iska andr number fix ha ye to game me cheating hojae gi islia ham ak random no generate karwaen ga har bar
const randomNumber = Math.floor(Math.random() * 6 + 1);
// jis number se multiply karenge uske darmiyan hi hoga number +1 matlab zero nahi hoga
//console.log(randomNumber);//is command se ham cheating karsakte han random number pata lag jaye ga
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between (1-6): ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed a correct number");
}
else {
    console.log("You guessed a wrong number");
}
