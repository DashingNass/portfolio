/* ==========================================
   CONTACT BUTTON
========================================== */

const contactButton =
  document.getElementById("contact-button");

const starContainer =
  document.querySelector(".star-container");


contactButton.addEventListener("click", function (event) {

  event.preventDefault();


  /* ========================================
     BUTTON POSITION
  ======================================== */

  const rect =
    contactButton.getBoundingClientRect();

  const centerX =
    rect.left + rect.width / 2;

  const centerY =
    rect.top + rect.height / 2;


  /* ========================================
     CREATE STARS
  ======================================== */

  for (let i = 0; i < 12; i++) {

    const star =
      document.createElement("span");

    star.classList.add("star");

    star.textContent = "✦";


    /* Richting */

    const angle =
      (Math.PI * 2 / 12) * i;


    /* Afstand */

    const distance =
      70 + Math.random() * 80;


    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;


    /* Positie */

    star.style.left =
      `${centerX}px`;

    star.style.top =
      `${centerY}px`;


    star.style.setProperty(
      "--x",
      `${x}px`
    );

    star.style.setProperty(
      "--y",
      `${y}px`
    );


    starContainer.appendChild(star);


    /* Verwijderen */

    setTimeout(() => {

      star.remove();

    }, 900);

  }


  /* ========================================
     OPEN MAIL
  ======================================== */

  setTimeout(() => {

    window.location.href =
      "mailto:nasseragrampon@gmail.com";

  }, 500);

});