//xify
console.log("1. xify\n");
function xify(str){
    let num = str.length;
    let strX = "";
    for(let i = 0; i < num; i++){
        strX = strX + "x";
    }
    
   return str = strX;

}
console.log(xify("hello"));
console.log("--------------------------------------------------\n");


//yellingChars
console.log("2. yellingChars\n");
let myString = 'goodness';
let myString2 = 'oh hello';
function yellingChars(str){
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString = newString + str[i]+ "!";
    }
    
    return newString;
}
console.log(yellingChars(myString));
console.log(yellingChars(myString2));
console.log("--------------------------------------------------\n");

//indexedChars
console.log("3. indexedChars\n");
myString = 'hello';
myString2 = 'bye';
function indexedChars(str){
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        numChar = `${i}`;
        newString = newString + numChar + str[i];
    }
    return newString;
}
console.log(indexedChars(myString));
console.log(indexedChars(myString2));
console.log("--------------------------------------------------\n");

//exclaim
console.log("4. exclaim\n");
myString = 'What are you doing? Are you a fool?';
myString2 = 'This is fine.';
function exclaim(str){
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '?' || str[i] === '.'){
            newString = newString + '!';
        }
        else{
            newString = newString + str[i];
        }
    }
    return newString;
}
console.log(exclaim(myString));
console.log(exclaim(myString2));
console.log("--------------------------------------------------\n");

//truncate
console.log("5. truncate\n");
myString = "The fault, dear Brutus, is not in our stars, but in ourselves.";
myString2 = "Well, that's just, like, your opinion man.";
function truncate(str){
    let newString = '';
    for (let i = 0; i < 16; i++) {
        if(i === 15){
            newString = newString + '...';
        }
        else{
            newString = newString + str[i];
        }
    }
    return newString; 
}
console.log(truncate(myString));
console.log(truncate(myString2));
console.log("--------------------------------------------------\n");

//ciEmailify
console.log("6. ciEmailify\n");
myString = "colin jaffe";
myString2 = "Anthony DeRosa";
function ciEmailify(str){
    let emailAddress = '';
    let firstName = '';
    let lastName = '';
    let i = 0;
    while(str[i] !== " "){

        firstName = firstName + str[i];

        i++;
    }
    i++;
    while(i !== str.length){

        lastName = lastName + str[i];

        i++;
    }
    emailAddress = `${firstName}.${lastName}@codeimmersives.com`
    return emailAddress;   
}
console.log(ciEmailify(myString));
console.log(ciEmailify(myString2));
console.log("--------------------------------------------------\n");

//reverse
console.log("7. reverse\n");

console.log("--------------------------------------------------\n");
//onlyVowels
console.log("8. onlyVowels\n");

console.log("--------------------------------------------------\n");