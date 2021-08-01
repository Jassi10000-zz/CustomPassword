// define the numbers , symbols and alphabets
const numbers = '0123456789';
const symbols = '!@#$%^&*_+=';
const alphabets = 'abcdefghijklmnopqrstuvwxyz';

const createPassword = ( length = 12 , hasNumbers = true , hasSymbols = true) => {
    // initially generates the password with all alphabet characters
    let characters = alphabets;

    // in case we want a combo of numbers and alphabets
    hasNumbers ? (characters += numbers ) : ''
    hasSymbols ? (characters += symbols ) : ''

    return generatedPassword(length,characters);
};


const generatedPassword = (length,characters) => {
    // initially the password is empty
    let password = '';
    for( let i = 0 ; i < length ; i++ ){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

module.exports = createPassword;