const api_link = "https://api.adviceslip.com/advice";
let advice_id = document.getElementById('advice-id');
let advice_text = document.getElementById('advice-title');
let advice_btn = document.getElementById('dice');

advice_btn.addEventListener('click', getNewAdvice);

async function getAdvice() {
    const ad = await fetch(api_link);
    const {slip: {advice, id}} = await ad.json();
    advice_id.innerHTML = id;
    advice_text.innerHTML = advice;
    setTimeout(0.001);
}

getAdvice();

function getNewAdvice() {
    getAdvice();
}