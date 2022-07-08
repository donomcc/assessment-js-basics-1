const readLine = require('readline');

const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let password;
let reg = /\d/;
let regLetter = /[a-zA-Z]/g;

function success() {
    console.log(`
         ___                                    _ 
        / __|  _  _   __   __   ___   ___  ___ | |
        \\__ \\ | || | / _| / _| / -_) (_-< (_-< |_|
        |___/  \\_,_| \\__| \\__| \\___| /__/ /__/ (_)
                                                   `)
}

function fail() {
    console.log(`
        
    ___          _   _   _ 
   | __|  __ _  (_) | | | |
   | _|  / _' | | | | | |_|
   |_|   \\__,_| |_| |_| (_)
                           
  `);
}

reader.question("Enter your password: ", function(password) {

    //Check 1. Checks to see if password is no more than 20 characters
    //Check 2. Checks password if its "password" or "letmein"

    if (password.length >= 10 && reg.test(password) && regLetter.test(password) && password.length < 20 && password !== "password" && password !== "letmein"){
        success();
    }else{
       fail(); 
    }

    reader.close();
   })
   







