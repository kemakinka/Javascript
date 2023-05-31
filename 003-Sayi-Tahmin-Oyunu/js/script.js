const pcSecim = document.querySelector("#pcSecim");
const gammerSecim = document.querySelector("#gammerSecim");
const pcSkor = document.querySelector("#pcSkor");
const gammerSkor = document.querySelector("#gammerSkor");
const anaDiv = document.querySelector("#anaDiv");
const bilgi = document.querySelector("#bilgi");


let pcSkorCount = 1;
let gammerSkorCount = 1;
let whileCount = 1;
let oyunSayisi = 0;

oyunSayisi = Number(prompt("Oyun Sayısı Giriniz: ","1"));

if(oyunSayisi < 1 ){
    oyunSayisi = 1;
}

bilgi.innerHTML = `-- OYUN SAYISI : (${oyunSayisi}) --`;

anaDiv.addEventListener('click', function (e) {
    let element = e.target;
    if (element.matches('button')) {
        let pcRandom = Math.floor(Math.random() *10);

        if(pcRandom == 0){
            pcRandom += 1;
        }

        pcSecim.textContent = pcRandom;
        let gammerInt = Number(gammerSecim.textContent = element.value);

        if (gammerInt !== pcRandom) {
            pcSkor.textContent = pcSkorCount++;
        } else {
            gammerSkor.textContent = gammerSkorCount++;
        }
        
        if (oyunSayisi == 1) {
            if (pcSkorCount < gammerSkorCount) {
                anaDiv.innerHTML = `
                <div class="alert alert-success text-center" role="alert">
                <strong>TEBRİKLER, KAZANDINIZ</strong></div>
                <button class="btn btn-primary btn-lg" onClick="window.location.href=window.location.href">Tekrar Oyna</button>
                `;
            } else {
                anaDiv.innerHTML = `
                <div class="alert alert-danger text-center" role="alert">
                <strong>KAZANAN BİLGİSAYAR</strong></div>
                <button class="btn btn-primary btn-lg" onClick="window.location.href=window.location.href">Tekrar Oyna</button>
                `;
            }
        }
        oyunSayisi -= 1;
        bilgi.innerHTML = `-- OYUN SAYISI : (${oyunSayisi}) --`;


    };

    e.preventDefault();
});



