/* =========================
   ELEMENTOS DEL CARRUSEL
========================= */

const track =
    document.getElementById("carruselTrack");


const slides =
    document.querySelectorAll(".slide");


const botonAnterior =
    document.getElementById("anterior");


const botonSiguiente =
    document.getElementById("siguiente");


const puntos =
    document.querySelectorAll(".punto");



/* =========================
   SLIDE ACTUAL
========================= */

let slideActual = 0;



/* =========================
   ACTUALIZAR CARRUSEL
========================= */

function actualizarCarrusel() {

    /*
       Cada slide ocupa 100%.

       Slide 0 = 0%
       Slide 1 = -100%
       Slide 2 = -200%
    */

    track.style.transform =
        `translateX(-${slideActual * 100}%)`;


    /*
       Actualizamos puntitos
    */

    puntos.forEach((punto, index) => {

        if (index === slideActual) {

            punto.classList.add("activo");

        } else {

            punto.classList.remove("activo");

        }

    });


    /*
       Detener cualquier video
       cuando cambiamos de slide
    */

    document
        .querySelectorAll(".video-recuerdo")
        .forEach((video) => {

            video.pause();

            video.currentTime = 0;

        });

}



/* =========================
   FLECHA DERECHA
========================= */

botonSiguiente.addEventListener(
    "click",
    () => {

        slideActual++;


        /*
           Si llegamos después
           del último,
           volvemos al primero
        */

        if (
            slideActual >=
            slides.length
        ) {

            slideActual = 0;

        }


        actualizarCarrusel();

    }
);



/* =========================
   FLECHA IZQUIERDA
========================= */

botonAnterior.addEventListener(
    "click",
    () => {

        slideActual--;


        /*
           Si estamos antes
           del primero,
           vamos al último
        */

        if (slideActual < 0) {

            slideActual =
                slides.length - 1;

        }


        actualizarCarrusel();

    }
);



/* =========================
   PUNTITOS
========================= */

puntos.forEach((punto) => {

    punto.addEventListener(
        "click",
        () => {

            slideActual =
                Number(
                    punto.dataset.slide
                );


            actualizarCarrusel();

        }
    );

});



/* =========================
   VIDEO AL PASAR EL MOUSE
========================= */

const recuerdos =
    document.querySelectorAll(
        ".recuerdo"
    );


recuerdos.forEach((recuerdo) => {

    const video =
        recuerdo.querySelector(
            ".video-recuerdo"
        );



    /*
       MOUSE ENTRA
    */

    recuerdo.addEventListener(
        "mouseenter",
        () => {

            /*
               Detenemos los otros
            */

            document
                .querySelectorAll(
                    ".video-recuerdo"
                )
                .forEach(
                    (otroVideo) => {

                        if (
                            otroVideo !==
                            video
                        ) {

                            otroVideo.pause();

                            otroVideo.currentTime = 0;

                        }

                    }
                );


            /*
               Reproducimos el video
            */

            video
                .play()
                .catch((error) => {

                    console.log(
                        "No se pudo reproducir:",
                        error
                    );

                });

        }
    );



    /*
       MOUSE SALE
    */

    recuerdo.addEventListener(
        "mouseleave",
        () => {

            video.pause();

            video.currentTime = 0;

        }
    );

});