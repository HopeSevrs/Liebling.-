/* =========================================
   CONFIGURACIÓN DE SCROLLREVEAL
========================================= */

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};


/* =========================================
   ANIMACIONES
========================================= */

if (typeof ScrollReveal !== "undefined") {

  /* TÍTULO PRINCIPAL */
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
  });


  /* CRONÓMETRO */
  ScrollReveal().reveal(".love-counter", {
    ...scrollRevealOption,
    delay: 300,
  });


  /* IMAGEN DEL HEADER */
  ScrollReveal().reveal(".header__container > img", {
    ...scrollRevealOption,
    delay: 600,
  });


  /* PÁRRAFOS DE NUESTRA HISTORIA */
  ScrollReveal().reveal(".range__copy p", {
    ...scrollRevealOption,
    interval: 150,
  });


  /* SECCIÓN CON IMAGEN Y TEXTO */
  ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
  });


  ScrollReveal().reveal(".location__content .section__header", {
    ...scrollRevealOption,
    delay: 200,
  });


  ScrollReveal().reveal(".location__content p", {
    ...scrollRevealOption,
    delay: 400,
  });


  /* TEXTO DEBAJO DEL CARRUSEL */
  ScrollReveal().reveal(".select__text-box", {
    ...scrollRevealOption,
    delay: 300,
  });


  /* TRES FOTOS */
  ScrollReveal().reveal(".story__card", {
    ...scrollRevealOption,
    interval: 200,
  });

}



/* =========================================
   CARRUSEL SWIPER
========================================= */

/*
   Ya NO tenemos:

   - precio 225/day
   - iconos del carro
   - botones View Details
   - botones Rent Now

   Solo quedan las imágenes.
*/

if (
  typeof Swiper !== "undefined" &&
  document.querySelector(".swiper")
) {

  const swiper = new Swiper(".swiper", {

    loop: true,

    effect: "coverflow",

    grabCursor: true,

    centeredSlides: true,

    slidesPerView: "auto",


    coverflowEffect: {

      rotate: 0,

      depth: 500,

      modifier: 1,

      scale: 0.75,

      slideShadows: false,

      stretch: -100,

    },

  });

}



/* =========================================
   BANNER INFINITO
========================================= */

const banner =
  document.querySelector(".banner__wrapper");


if (banner) {

  /*
     Evitamos duplicarlo dos veces
     accidentalmente.
  */

  if (!banner.dataset.duplicated) {

    const bannerContent =
      Array.from(banner.children);


    bannerContent.forEach((item) => {

      const duplicateNode =
        item.cloneNode(true);


      duplicateNode.setAttribute(
        "aria-hidden",
        "true"
      );


      banner.appendChild(
        duplicateNode
      );

    });


    banner.dataset.duplicated = "true";

  }

}



/* =========================================
   ♡ TIME TOGETHER ♡
   CRONÓMETRO
========================================= */


/*
   FECHA EN LA QUE EMPEZARON

   7 de octubre de 2024
   12:00 AM
*/

const relationshipStart =
  new Date(
    2024,
    9,
    7,
    0,
    0,
    0
  );



/* =========================================
   ELEMENTOS DEL HTML
========================================= */

const yearsElement =
  document.getElementById("years");

const daysElement =
  document.getElementById("days");

const hoursElement =
  document.getElementById("hours");

const minutesElement =
  document.getElementById("minutes");

const secondsElement =
  document.getElementById("seconds");



/* =========================================
   FUNCIÓN DEL CRONÓMETRO
========================================= */

function updateLoveCounter() {


  /*
     Si por alguna razón el HTML
     del contador no existe,
     evitamos que JavaScript se rompa.
  */

  if (
    !yearsElement ||
    !daysElement ||
    !hoursElement ||
    !minutesElement ||
    !secondsElement
  ) {

    return;

  }



  /* HORA ACTUAL */

  const now = new Date();



  /* =====================================
     CALCULAR LOS AÑOS COMPLETOS
  ===================================== */

  let years =
    now.getFullYear()
    -
    relationshipStart.getFullYear();



  /*
     Creamos el aniversario
     correspondiente a este año.
  */

  let lastAnniversary =
    new Date(

      relationshipStart.getFullYear()
      + years,

      relationshipStart.getMonth(),

      relationshipStart.getDate(),

      relationshipStart.getHours(),

      relationshipStart.getMinutes(),

      relationshipStart.getSeconds()

    );



  /*
     Si todavía no ha llegado
     el aniversario de este año,
     restamos uno.
  */

  if (lastAnniversary > now) {

    years--;


    lastAnniversary =
      new Date(

        relationshipStart.getFullYear()
        + years,

        relationshipStart.getMonth(),

        relationshipStart.getDate(),

        relationshipStart.getHours(),

        relationshipStart.getMinutes(),

        relationshipStart.getSeconds()

      );

  }



  /* =====================================
     DIFERENCIA DESDE EL ÚLTIMO ANIVERSARIO
  ===================================== */

  const difference =
    now - lastAnniversary;



  /*
     Milisegundos → segundos
  */

  const totalSeconds =
    Math.floor(
      difference / 1000
    );



  /* DÍAS */

  const days =
    Math.floor(
      totalSeconds / 86400
    );



  /* HORAS */

  const hours =
    Math.floor(
      (totalSeconds % 86400)
      /
      3600
    );



  /* MINUTOS */

  const minutes =
    Math.floor(
      (totalSeconds % 3600)
      /
      60
    );



  /* SEGUNDOS */

  const seconds =
    totalSeconds % 60;



  /* =====================================
     MOSTRAR LOS RESULTADOS
  ===================================== */

  yearsElement.textContent =
    years;


  daysElement.textContent =
    days;


  hoursElement.textContent =
    String(hours).padStart(
      2,
      "0"
    );


  minutesElement.textContent =
    String(minutes).padStart(
      2,
      "0"
    );


  secondsElement.textContent =
    String(seconds).padStart(
      2,
      "0"
    );

}



/* =========================================
   INICIAR CRONÓMETRO
========================================= */


/*
   Lo ejecutamos inmediatamente.
*/

updateLoveCounter();


/*
   Después se actualiza
   cada segundo.
*/

setInterval(
  updateLoveCounter,
  1000
);