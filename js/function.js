function inputIntoNumber (id){

    const donateAmount = document.getElementById(id).value;
    const donateAmountNumber = parseFloat(donateAmount);
    return donateAmountNumber;
}

function textIntoNumber (id){

    const donateAmount = document.getElementById(id).innerText;
    const donateAmountNumber = parseFloat(donateAmount);
    return donateAmountNumber;
}

