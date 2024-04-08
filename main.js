#! /user/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let answers = await inquirer.prompt([
    {
        name: "From",
        message: "Enter From currency?",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "TO",
        message: "Enter TO currency?",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "Amount",
        message: "Enter your Amount?",
        type: "number",
    },
]);
let user_from_currency = answers.From;
let user_To_currency = answers.To;
let fromAmount = currency[answers.From]; //exchange rate
let ToAmount = currency[answers.TO]; //exchange rate
let Amount = answers.Amount;
let baseAmount = Amount / fromAmount; //USD base currency 
let convertedAmount = baseAmount * ToAmount;
console.log(convertedAmount);
