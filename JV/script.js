const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


// ABRIR SOBRE
envelope.addEventListener("click", function () {

    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(function () {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);

});


// BOTÓN NO
noBtn.addEventListener("mouseover", function () {

    const distance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

});


// BOTÓN YES
yesBtn.addEventListener("click", function () {

    console.log("YES FUNCIONA");

    title.textContent = "Owwww! ♡";

    catImg.src = "LMG.gif";

    buttons.style.display = "none";

    finalText.style.display = "block";

});