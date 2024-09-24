// noakhali donate section

document.getElementById('noakhali-donate-btn').addEventListener('click', function(){

    const donateAmountNumber = inputIntoNumber('noakhali-donate-input');
    const totalDonate = textIntoNumber('noakhali-donate-sum');

    if  (isNaN(donateAmountNumber) || donateAmountNumber < 0 ){
        alert("Please Donate Positive Amount");
    }
    else{

        const myMoneyNumber = textIntoNumber('my-money');
        if (myMoneyNumber > 0 && donateAmountNumber <= myMoneyNumber){

            const donateSum = donateAmountNumber + totalDonate;
            const noakhaliDonateSum = document.getElementById('noakhali-donate-sum');
            noakhaliDonateSum.innerText = donateSum;

            const totalMyMoney = myMoneyNumber - donateAmountNumber;
            const myMoney = document.getElementById('my-money');
            myMoney.innerText = totalMyMoney;

            const popUp = document.getElementById('pop-up');
            popUp.classList.remove('hidden');


            // History js

        // History Div

        const historyDiv = document.createElement("div");
        historyDiv.classList.add("container","mx-auto","border-[1px]","rounded-2xl","p-8","space-y-4","mb-4");

        // History Title

        const title = document.getElementById('noakhali-title').innerText;
        const amount = document.getElementById('noakhali-donate-input').value;
        const message = amount + " Taka is Donated " + title;
        const historyTitle = document.createElement("p");
        historyTitle.classList.add("font-bold", "text-xl");
        historyTitle.innerText = message;
        historyDiv.appendChild(historyTitle);

        // History Time

        const historyTime = document.createElement("p");
        historyTime.classList.add("font-light" ,"text-base");
        const DateTime= new Date();
        historyTime.innerText = "Date : " + DateTime ;
        historyDiv.appendChild(historyTime);

        // History Section

        const historySection = document.getElementById('history-section');
        historySection.appendChild(historyDiv);
        

        newInput('noakhali-donate-input');


        }
        else {
            alert("You Don't Have Enough Money");
        }

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
        
        const myMoneyNumber = textIntoNumber('my-money');
        if (myMoneyNumber > 0 && donateAmountNumber <= myMoneyNumber){

            const donateSum = donateAmountNumber + totalDonate;
            const noakhaliDonateSum = document.getElementById('feni-donate-sum');
            noakhaliDonateSum.innerText = donateSum;

            const totalMyMoney = myMoneyNumber - donateAmountNumber;
            const myMoney = document.getElementById('my-money');
            myMoney.innerText = totalMyMoney;

            const popUp = document.getElementById('pop-up');
            popUp.classList.remove('hidden');


                    // History js

        // History Div

        const historyDiv = document.createElement("div");
        historyDiv.classList.add("container","mx-auto","border-[1px]","rounded-2xl","p-8","space-y-4","mb-4");

        // History Title

        const title = document.getElementById('feni-title').innerText;
        const amount = document.getElementById('feni-donate-input').value;
        const message = amount + " Taka is Donated " + title;
        const historyTitle = document.createElement("p");
        historyTitle.classList.add("font-bold", "text-xl");
        historyTitle.innerText = message;
        historyDiv.appendChild(historyTitle);

        // History Time

        const historyTime = document.createElement("p");
        historyTime.classList.add("font-light" ,"text-base");
        const DateTime= new Date();
        historyTime.innerText = "Date : " + DateTime ;
        historyDiv.appendChild(historyTime);

        // History Section

        const historySection = document.getElementById('history-section');
        historySection.appendChild(historyDiv);


        newInput('feni-donate-input');


        }
        else {
            alert("You Don't Have Enough Money");
        }

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
        
        const myMoneyNumber = textIntoNumber('my-money');
        if (myMoneyNumber > 0 && donateAmountNumber <= myMoneyNumber){

            const donateSum = donateAmountNumber + totalDonate;
            const noakhaliDonateSum = document.getElementById('quota-donate-sum');
            noakhaliDonateSum.innerText = donateSum;

            const totalMyMoney = myMoneyNumber - donateAmountNumber;
            const myMoney = document.getElementById('my-money');
            myMoney.innerText = totalMyMoney;

            const popUp = document.getElementById('pop-up');
            popUp.classList.remove('hidden');


            // History js

        // History Div

        const historyDiv = document.createElement("div");
        historyDiv.classList.add("container","mx-auto","border-[1px]","rounded-2xl","p-8","space-y-4","mb-4");

        // History Title

        const title = document.getElementById('quota-title').innerText;
        const amount = document.getElementById('quota-donate-input').value;
        const message = amount + " Taka is Donated " + title;
        const historyTitle = document.createElement("p");
        historyTitle.classList.add("font-bold", "text-xl");
        historyTitle.innerText = message;
        historyDiv.appendChild(historyTitle);

        // History Time

        const historyTime = document.createElement("p");
        historyTime.classList.add("font-light" ,"text-base");
        const DateTime= new Date();
        historyTime.innerText = "Date : " + DateTime ;
        historyDiv.appendChild(historyTime);

        // History Section

        const historySection = document.getElementById('history-section');
        historySection.appendChild(historyDiv);


        newInput('quota-donate-input');


        }
        else {
            alert("You Don't Have Enough Money");
        }
    
    }

})


