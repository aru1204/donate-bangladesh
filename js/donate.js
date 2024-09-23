// noakhali donate section

document.getElementById('noakhali-donate-btn').addEventListener('click', function(){

    const donateAmountNumber = inputIntoNumber('noakhali-donate-input');
    const totalDonate = textIntoNumber('noakhali-donate-sum');
    
    
    if  (isNaN(donateAmountNumber) || donateAmountNumber < 0 ){
        alert("Please Donate Positive Amount");
    }
    else{
        const donateSum = donateAmountNumber + totalDonate;
        const noakhaliDonateSum = document.getElementById('noakhali-donate-sum');
        noakhaliDonateSum.innerText = donateSum;

        const myMoneyNumber = textIntoNumber('my-money');
        const totalMyMoney = myMoneyNumber - donateAmountNumber;
        const myMoney = document.getElementById('my-money');
        myMoney.innerText = totalMyMoney;
    }
})


// feni donate section

document.getElementById('feni-donate-btn').addEventListener('click', function(){

    const donateAmountNumber = inputIntoNumber('feni-donate-input');
    const totalDonate = textIntoNumber('feni-donate-sum');
    
    
    if  (isNaN(donateAmountNumber) || donateAmountNumber < 0 ){
        alert("Please Donate Positive Amount");
    }
    else{
        const donateSum = donateAmountNumber + totalDonate;
        const noakhaliDonateSum = document.getElementById('feni-donate-sum');
        noakhaliDonateSum.innerText = donateSum;

        const myMoneyNumber = textIntoNumber('my-money');
        const totalMyMoney = myMoneyNumber - donateAmountNumber;
        const myMoney = document.getElementById('my-money');
        myMoney.innerText = totalMyMoney;
    }
})


// quota donate section

document.getElementById('quota-donate-btn').addEventListener('click', function(){

    const donateAmountNumber = inputIntoNumber('quota-donate-input');
    const totalDonate = textIntoNumber('quota-donate-sum');
    
    
    if  (isNaN(donateAmountNumber) || donateAmountNumber < 0 ){
        alert("Please Donate Positive Amount");
    }
    else{
        const donateSum = donateAmountNumber + totalDonate;
        const noakhaliDonateSum = document.getElementById('quota-donate-sum');
        noakhaliDonateSum.innerText = donateSum;

        const myMoneyNumber = textIntoNumber('my-money');
        const totalMyMoney = myMoneyNumber - donateAmountNumber;
        const myMoney = document.getElementById('my-money');
        myMoney.innerText = totalMyMoney;
    }
})