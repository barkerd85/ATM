"use strict";

const atm = require("./atm")
 
atm.validatePin();

 function mainMenu() {
  let prompt = require("prompt-sync")();
  let menu = parseInt(prompt("What would you like to do? Please choose a number. 1. - Check balance 2. - Make a withdrawal 3. - Make a deposit 4. -restart 5. - quit"));
  switch(menu){
    case 1: 
    atm.getBalance();
    mainMenu();
    case 2: 
    atm.withdraw()
    mainMenu();
    case 3:
    atm.deposit();
    mainMenu();
    case 4:
    atm.restart();
    mainMenu();
    case 5:
    console.log("Goodbye");
    process.exit()
  }
}

mainMenu()
