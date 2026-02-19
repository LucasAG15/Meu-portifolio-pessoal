/* ===============================
   ANIMAÇÃO AO ROLAR A PÁGINA
   (Scroll Reveal)
================================ */

document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".fade-in, .slide-up, .project-card, .scroll-section"
    );

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        observer.observe(el);
    });
});

/* ===============================
   EFEITO PARALLAX LEVE NO HERO
================================ */

window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const scrollY = window.scrollY;
    hero.style.transform = `translateY(${scrollY * 0.15}px)`;
});

/* ===============================
   EFEITO SUAVE NOS BOTÕES
================================ */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.removeProperty("--x");
        btn.style.removeProperty("--y");
    });
});

/* ===============================
   SCROLL SUAVE PARA LINKS INTERNOS
================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ===============================
   ANIMAÇÃO DE HOVER NOS CARDS
================================ */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * 6;
        const rotateY = ((x / rect.width) - 0.5) * -6;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-6px)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
