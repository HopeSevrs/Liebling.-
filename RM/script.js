/* =========================================
   OBTENER ELEMENTOS
========================================= */

const envelope =
    document.getElementById(
        "envelope-container"
    );


const letter =
    document.getElementById(
        "letter-container"
    );


const noBtn =
    document.querySelector(
        ".no-btn"
    );


const yesBtn =
    document.querySelector(
        ".yes-btn"
    );


const title =
    document.getElementById(
        "letter-title"
    );


const catImg =
    document.getElementById(
        "letter-cat"
    );


const buttons =
    document.getElementById(
        "letter-buttons"
    );


const finalContent =
    document.getElementById(
        "final-content"
    );


const letterWindow =
    document.querySelector(
        ".letter-window"
    );



/* =========================================
   ABRIR EL SOBRE
========================================= */

envelope.addEventListener(
    "click",
    function () {


        /*
           Quitamos el sobre.
        */

        envelope.style.display =
            "none";


        /*
           Mostramos la siguiente pantalla.
        */

        letter.style.display =
            "flex";


        /*
           Pequeña animación de entrada.
        */

        setTimeout(
            function () {

                letterWindow.classList.add(
                    "open"
                );

            },
            50
        );

    }
);



/* =========================================
   BOTÓN NO ESCAPA
========================================= */

noBtn.addEventListener(
    "mouseover",
    function () {


        /*
           Distancia máxima del movimiento.
        */

        const distance =
            170;


        /*
           Dirección aleatoria.
        */

        const angle =
            Math.random()
            *
            Math.PI
            *
            2;


        /*
           Movimiento horizontal.
        */

        const moveX =
            Math.cos(angle)
            *
            distance;


        /*
           Movimiento vertical.
        */

        const moveY =
            Math.sin(angle)
            *
            distance;


        /*
           Mover botón NO.
        */

        noBtn.style.transform =
            `translate(${moveX}px, ${moveY}px)`;

    }
);



/* =========================================
   BOTÓN YES
========================================= */

yesBtn.addEventListener(
    "click",
    function () {


        /*
           Cambiar título.
        */

        title.textContent =
            "Owwww! ♡";


        /*
           Cambiar GIF.
        */

        catImg.src =
            "G2.gif";


        /*
           Activamos el diseño final.
        */

        letterWindow.classList.add(
            "final"
        );


        /*
           Quitamos los botones
           YES y NO.
        */

        buttons.style.display =
            "none";


        /*
           Mostramos el texto final
           y el botón de la carta.
        */

        finalContent.style.display =
            "flex";

    }
);