"use strict"
const readline = require('readline-sync');
// Block is used to group statements.
{
    const name = "Adi";
    console.log("name");
}

// Commonly used with control statements like while, for, if.

//If else statements
if (46%2==0){
    console.log('46 is even');
}
else{
    console.log('46 is odd');
}

//Falsy values -> false, null, undefined, "", 0, NaN
if(NaN){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}

//Switch case
const gender = readline.question('What is your gender?: ')
switch(gender){
    case 'female':
        console.log("Girl");
        break;
    case 'male':
        console.log("Boy");
        break;
    default:
        console.log("Only two genders");
        break;
}

//Exception handling

//Throw - throws any object like a number, string, or an inbuilt exception as an exception

function getMonth(mo){
    mo--;

    const months = [
        "January","February","March","April","May","June",
        "July","August","Sepetember","October","November","December"
    ];

    if(!months[mo]){
        throw new Error("Invalid month code");
    }
    
    console.log(`Month is ${months[mo]}`);
}

try{
    const month = readline.questionInt("Enter the number of month 1-12 : ")
    getMonth(month);
}
catch(e){
    console.error(e.message);
}
finally{
    console.log("Enjoyed?")
}