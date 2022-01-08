document.body.classList.add('js-enabled');

for (i = 1; i <= 100; i++){
    const OlElt = document.querySelector('#fizzbuzz');
    if (i%3 === 0 && i%5 === 0){
        OlElt.insertAdjacentHTML('beforeend',`<li>FIZZBUZZ</li>`);
    } else if (i%5 === 0){
        OlElt.insertAdjacentHTML('beforeend',`<li>BUZZ</li>`);
    } else if (i%3 === 0){
        OlElt.insertAdjacentHTML('beforeend',`<li>FIZZ</li>`);
    } else {
        OlElt.insertAdjacentHTML('beforeend',`<li>${i}</li>`);
    }
}