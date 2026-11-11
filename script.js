
// MENÚ RESPONSIVE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuBtn.textContent = navLinks.classList.contains("show")
        ? "✕"
        : "☰";
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuBtn.textContent = "☰";
    });
});

// ANIMACIONES AL DESPLAZARSE

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// AÑO AUTOMÁTICO DEL FOOTER

const year = document.querySelector("footer > span");

if (year) {
    year.textContent =
        `© ${new Date().getFullYear()} · MI PORTAFOLIO PERSONAL`;
}
