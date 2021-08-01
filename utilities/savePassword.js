const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
    // with fs.open it will find out mypasswords.txt if it exists otherwise it will simply create it 
    // 'a' here refers to append , means each password will be appended one after the other in the file 
    // 666 refers to the permissions
    fs.open(path.join(__dirname , "../" , 'mypasswords.txt'), 'a', 666, (e , id) => {
        fs.write(id , password +  os.EOL , null , 'utf-8' , () => {
            fs.close(id , () => {
                console.log(chalk.cyan.bold("Password saved to mypasswords.txt"));
            })
        })
    })
}


module.exports = savePassword;