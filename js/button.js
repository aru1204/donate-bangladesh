// Donation btn js

document.getElementById('donation-btn').addEventListener('click', function(){
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');

    donationBtn.classList.add('bg-[#B4F461]');
    historyBtn.classList.remove('bg-[#B4F461]');

    const donationSection = document.getElementById('donation-section');
    const historySection = document.getElementById('history-section');

    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
})

// History btn js

document.getElementById('history-btn').addEventListener('click', function(){
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');

    historyBtn.classList.add('bg-[#B4F461]');
    donationBtn.classList.remove('bg-[#B4F461]');

    const donationSection = document.getElementById('donation-section');
    const historySection = document.getElementById('history-section');

    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
})

// Popup btn js

document.getElementById('popup-cls-btn').addEventListener('click', function (){

    const popUp = document.getElementById('pop-up');
    popUp.classList.add('hidden');
})


