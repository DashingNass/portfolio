/* ==========================================
   PROJECT TOAST
========================================== */

const projectToast = document.querySelector(".project-toast");
const toastClose = document.querySelector(".toast-close");
const toastMessage = document.querySelector(".toast-message");

if (projectToast) {

  /* ==========================================
     DEVICE MESSAGE
  ========================================== */

  if (toastMessage) {

    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {

        // This message will be visible on tablet
      toastMessage.textContent =
        "Tik op de afbeelding om een project te bekijken.";

    } else {
        
        // This message will be visible on desktop
      toastMessage.textContent =
        "Hover om te ontdekken.";

    }

  }


  /* ==========================================
     SHOW TOAST
  ========================================== */

  setTimeout(() => {

    projectToast.classList.add("show");

  }, 800);


  /* ==========================================
     HIDE TOAST
     5 SECONDS AFTER APPEARING
  ========================================== */

  const hideToast = setTimeout(() => {

    projectToast.classList.remove("show");

  }, 5800);


  /* ==========================================
     CLOSE BUTTON
  ========================================== */

  if (toastClose) {

    toastClose.addEventListener("click", () => {

      projectToast.classList.remove("show");

      clearTimeout(hideToast);

    });

  }

}


// Disable right-click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Disable copy
document.addEventListener("copy", function (event) {
  event.preventDefault();
});

// Disable cutting
document.addEventListener("cut", function (event) {
  event.preventDefault();
});

// Disable text selection
document.addEventListener("selectstart", function (event) {
  event.preventDefault();
});
