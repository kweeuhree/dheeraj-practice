// A JavaScript function to convert a decimal number to binary, 
// hexadecimal or octal number using switch ().

function validateInput(e) {
    e.preventDefault();
    
    let decimalNumber = document.getElementById('number-input').value;
    let conversionType = document.getElementById('conversion-input').value;
    let resultantString = document.querySelector('.resultant-string');
    let resultantNumber = document.querySelector('.resultant-number');
    let convertedNumber;

    decimalNumber = parseInt(decimalNumber);
    conversionType = conversionType.toLowerCase();


    if(validateConversionType(conversionType)) {
        switch(conversionType) {
            case 'bin':
                convertedNumber = (decimalNumber >>> 0).toString(2);
                conversionType = 'binary';
                break;
            case 'hex':
                convertedNumber = decimalNumber.toString(16);
                conversionType = 'hexadecimal';
                break;
            case 'oct':
                convertedNumber = decimalNumber.toString(8);
                conversionType = 'octal';
                break;
            default:
                console.log('There is an error')
        }
    }

    resultantString.innerHTML = `Entered number (${decimalNumber}) converted into ${conversionType} equals`;
    resultantNumber.innerHTML = ` ${convertedNumber}`;

    decimalNumber.innerHTML, conversionType.innerHTML = '';
}

function validateConversionType(conversionType) {
    const validChoices = [
        'hex', 'bin', 'oct'
    ]

    if(validChoices.includes(conversionType)) {
        return true;
    } else {
        alert('Make sure that you enter bin, hex, or oct for a conversion type.');
        return false;
    }
}