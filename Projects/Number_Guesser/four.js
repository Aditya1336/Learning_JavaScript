const form = document.querySelector('.form');
const prev = document.querySelector('.guesses');
const result = document.querySelector('.lastResult');
const display = document.querySelector('#guess');

let prevGuesses = [];
let remaining = 10;
let targetNum = Math.round(Math.random()*100+1);

let win = false;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const guessVal = parseInt(document.querySelector('#guessField').value.trim())

    if(guessVal==='' || (guessVal<1 || guessVal>100) || isNaN(guessVal)){
        display.innerHTML = "Please Enter Valid Choice."
    }
    else if(guessVal<targetNum){
        display.innerHTML = "Too Low"
    }
    else if(guessVal>targetNum){
        display.innerHTML = "Too High"
    }
    else{
        win = true;
    }

    prevGuesses.push(guessVal);
    remaining-=1;
    result.innerHTML=`${remaining}`;
    prev.innerHTML=`${prevGuesses.toString()}`;
    document.querySelector('#guessField').value='';

    if(win){
        display.innerHTML = `Awesome! The number was ${targetNum} and you guessed it<br>New Game starts in 5 secs`;
        setTimeout(newGame,5000);
    }
    if(remaining==0 && guessVal!=targetNum){
        display.innerHTML = `😢 Game Over! The number was ${targetNum}<br>New Game starts in 5 secs`;
        setTimeout(
            newGame
        ,5000);
    }
    else{
        setTimeout(()=>{
        display.innerHTML='Guess a number'
        },2000)
    }
})

function newGame(){
    display.innerHTML='Guess a number'
    remaining=10;
    prevGuesses=[];
    targetNum = Math.round(Math.random()*100+1);
    win = false;
    prev.innerHTML='';
    result.innerHTML='';  
}