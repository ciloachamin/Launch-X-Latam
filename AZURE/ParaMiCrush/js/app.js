function moverPosicionRandom(elment) {
    elment.style.position = 'absolute';
    elment.style.top = Math.random() * (window.innerHeight - elment.offsetHeight) + 'px';
    elment.style.left = Math.random() * (window.innerWidth - elment.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos. TE AMO!!!! ❤️');

    divModoSexo.style.display = 'block';
    const cancion = new Audio('asserts\\audio\\modo_hot.mp3');
    cancion.play();
});