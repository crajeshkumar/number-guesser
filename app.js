const minValue = 20;
const maxValue = 30;
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const guessInput = document.querySelector('#guess-input');
const result = document.querySelector('.results');
let leftGuess = 3;

max.appendChild(document.createTextNode(maxValue));
min.appendChild(document.createTextNode(minValue));

const winningNumber = Math.floor((Math.random()*(maxValue-minValue+1))+minValue);
console.log(winningNumber)

const submitBtn = document.querySelector('.submit-btn');
 submitBtn.addEventListener('click',checkNumber);

 function checkNumber(e){
     const guessNumber = parseInt(guessInput.value);
     if(isNaN(guessNumber) || guessNumber<minValue || guessNumber>maxValue){
        setMessage(`Please enter number beteen ${minValue} to ${maxValue}`,'red');
     }
     else{
        if(guessNumber === winningNumber)
        {
            setMessage('Your Guess is correct! You won!','green');
            guessInput.disabled = true;
            submitBtn.classList.add('playagain');
            submitBtn.value='Play Again';
            playAgain();
        }
        else{
            leftGuess--;
            setMessage(`Your guess is wrong!You have ${leftGuess} chances left `,'red');
        }
        if(leftGuess === 0){
            setMessage(`Game over!!! Winning Number is ${winningNumber}`,'red');
            guessInput.disabled = true;
            submitBtn.classList.add('playagain');
            submitBtn.value='Play Again';
            playAgain();
        }
     }
     e.preventDefault();
 }

 function setMessage(message,color){
     guessInput.style.borderColor=color;
     result.textContent = message;
     result.style.color = color;
     guessInput.style.borderColor = color;
 }

 

const wrapper = document.body;
wrapper.addEventListener('mousedown',playAgain)

function playAgain(e){
    if(e.target.classList.contains('playagain')){
        window.location.reload();
    }
}