"use strict";
// const PromptSync = require("prompt-sync");
//TODO: Import necessary values from account.js
const account = require("./account")
// const restart = require("./mainMenu")

function getBalance() {
  console.log("current balance is $" + account.balance)
}

  //TODO: Return the customer's acct. balance};

function withdraw() {
  let prompt = require('prompt-sync')();
  let requestedWithdraw = parseInt(prompt("How Much Do You Want to Withdraw?"));
  if(requestedWithdraw <= account.balance){
    account.balance = account.balance - requestedWithdraw;
    console.log("Issuing $" + requestedWithdraw + " From Your Checking Account, The New balance is $" + account.balance);
  }
  else if (requestedWithraw > account.balance){
    console.log("Try Less Money")
    withdraw()
  }
  else{
    console.log("Invalid Input");
    withdraw()
  }
}

function deposit() {
  let prompt = require("promptSync")();
  let depositAmount = parsePrompt(prompt("Enter Amound to Deposit"));
  account.balance = account.balance + depositAmount;
  console.log("Deposit Successful, Deposited $" + depositAmount + " New Balance is $" + account.balance); 
}

   //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made  

function validatePin (){
  let prompt = require("prompt-sync")();
  let usePin = parseInt(prompt('Enter your Pin'));
  if(usePin === account.pin){
    console.log("Pin Entered Correctly")
  }
  else {
    console.log("Incorrect Pin, Try Again!");
    validatePin()
  }
}

  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
// module.exports.restart = restart;
module.exports.validatePin = validatePin;