function adviced() {
    fetch('https://api.adviceslip.com/advice')

    .then(response => response.text())
    .then(json => JSON.parse(json))
    .then(json => { 
        document.getElementById('idNumber').innerHTML = json.slip.id;
        document.getElementById('fontAd').innerHTML =json.slip.advice;
        })
    .catch(err => console.log(err));
};

adviced();

document.getElementsByClassName('border')[0].addEventListener('click', kamu);
function kamu() {
    adviced();
    document.getElementsByClassName('border')[0].style.backgroundColor = 'hsl(150, 51%, 15%)';
    setTimeout(() => {document.getElementsByClassName('border')[0].style.backgroundColor= 'hsl(150, 100%, 66%)'}, 2000);
}