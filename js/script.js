/* got pin  */
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
/* generate pin in form */
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
/* event bubble using for calculator body */
document.getElementById('calculator-keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    /* not a number checking  */
    if (isNaN(number)) {
        /* clear numbers of value */
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        /* pin matcher input every digit number */
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
/* Submit Button Linked up */
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    /* success & failure const */
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    /*Success & Failure Message with conditional each other */
    if (pin == typedNumber) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'block';
        failError.style.display = 'block';
    }

}