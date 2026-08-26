const contactButton = document.getElementById("contact-button");
const starContainer = document.querySelector(".star-container");

if (contactButton && starContainer) {

  contactButton.addEventListener("click", function (event) {

    event.preventDefault();

    const rect = contactButton.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;


    for (let i = 0; i < 12; i++) {

      const star = document.createElement("span");

      star.classList.add("star");

      star.textContent = "✦";


      const angle =
        (Math.PI * 2 / 12) * i;

      const distance =
        60 + Math.random() * 60;


      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;


      star.style.left = `${centerX}px`;
      star.style.top = `${centerY}px`;

      star.style.setProperty("--x", `${x}px`);
      star.style.setProperty("--y", `${y}px`);


      starContainer.appendChild(star);


      setTimeout(() => {
        star.remove();
      }, 800);

    }


    // Mail pas openen nadat de sterren zijn verschenen
    setTimeout(() => {

      window.location.href = "mailto:nassergrampon@gmail.com";

    }, 500);

  });

}