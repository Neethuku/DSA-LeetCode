const readline = require('readline-sync');
const input = readline.question("Enter a value : ");

function checkPalindrome(x){
    if(x < 0) return false;
    const str = x.toString();
    for(let i=0;i<str.length/2;i++){
        if(str[i]!=str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome(input));
