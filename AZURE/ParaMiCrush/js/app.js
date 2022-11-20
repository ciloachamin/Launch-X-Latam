function moverPosicionRandom(elment) {
    elment.style.position = 'absolute';
    elment.style.top = Math.random() * (window.innerHeight - elment.offsetHeight) + 'px';
    elment.style.left = Math.random() * (window.innerWidth - elment.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sin_respeto")[0];

console.log(divModoSexo)

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️');

    window.open('modo.html', "_self", "nombre de la ventana")
    let video =document.getElementById('playVideo');
    video.pause();
});

