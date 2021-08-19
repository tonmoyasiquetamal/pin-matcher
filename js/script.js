/* got pin  */
function getPin(){
    const pin = Math.round (Math.random()*10000);
    const pinString = pin + ''
    if (pinString.length ==4){
        return pin;
    }
    else{
        return getPin();
    }
}
/* generate pin in form */
function generatePin (){
   const pin = getPin();
   document.getElementById('display-pin').value = pin;
}
/* event bubble using for calculator body */
document.getElementById('calculator-keypad').addEventListener('click', function(event){
const number = event.target.innerText;
const calcInput = document.getElementById('typed-numbers');

const previousNumber = calcInput.value;
const newNumber = previousNumber + number;
calcInput.value= newNumber;
});