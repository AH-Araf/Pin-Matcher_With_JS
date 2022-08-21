function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display Pin
    const displayPinField =  document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click',function(){
    //generate pin's value
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    //typed pin's value
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    
    //callink pin-success, also take out from if-3(box)
    const pinSuccessMessage = document.getElementById('pin-success');
    //callink pin-success, also take out from else-3(box)
    const pinFailMessage = document.getElementById('pin-fail');

    if(typedNumber === currentPin){
        //if-3(box)
        //show pin-sucess
        pinSuccessMessage.style.display = 'block';

        pinFailMessage.style.display= 'none';
    }
    else{
        //else-3(box)
        pinFailMessage.style.display= 'block';

        pinSuccessMessage.style.display = 'none';//for hiding previous message
    }
});