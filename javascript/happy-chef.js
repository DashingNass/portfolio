const processSection = document.querySelector(".design-process");

const observer = new IntersectionObserver((entries) => {

    if (!entries[0].isIntersecting) return;

    processSection.classList.add("active");

}, {
    threshold: 0.3
});

observer.observe(processSection);