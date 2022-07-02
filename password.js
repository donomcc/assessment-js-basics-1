const password = "huntwadwdawd";

let reg = /\d/;
let regLetter = /[a-zA-Z]/g;




if (password.length >= 10 && reg.test(password) && regLetter.test(password)){
    console.log(`
     ___                                    _ 
    / __|  _  _   __   __   ___   ___  ___ | |
    \\__ \\ | || | / _| / _| / -_) (_-< (_-< |_|
    |___/  \\_,_| \\__| \\__| \\___| /__/ /__/ (_)
                                               `);
}else{
    console.log(`
    
   ___          _   _   _ 
  | __|  __ _  (_) | | | |
  | _|  / _' | | | | | |_|
  |_|   \\__,_| |_| |_| (_)
                          
 `);
}
