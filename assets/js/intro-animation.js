const texts = [
    "Create. Explore. Expand. Conquer.",
    "World Models. Multimodal Learning. Embodied AI.",
    "Research with clarity, color, and motion."
];

const typewriterElement = document.getElementById("typewriter");
const introPage = document.getElementById("intro-page");
const mainContent = document.getElementById("main-content");
const cursorGlow = document.querySelector(".cursor-glow");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typewriterElement) return;

    const currentText = texts[textIndex];
    typewriterElement.textContent = currentText.slice(0, charIndex);

    if (!deleting && charIndex < currentText.length) {
        charIndex += 1;
        setTimeout(typeEffect, 56);
        return;
    }

    if (!deleting && charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (deleting && charIndex > 0) {
        charIndex -= 1;
        setTimeout(typeEffect, 24);
        return;
    }

    deleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 280);
}

function enterHomepage() {
    if (!introPage || !mainContent || introPage.classList.contains("is-leaving")) return;

    introPage.classList.add("is-leaving");
    mainContent.classList.add("is-visible");

    setTimeout(() => {
        introPage.style.display = "none";
    }, 760);
}

if (introPage) {
    introPage.addEventListener("click", enterHomepage);
    introPage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            enterHomepage();
        }
    });
}

if (cursorGlow) {
    window.addEventListener("pointermove", (event) => {
        cursorGlow.style.setProperty("--x", `${event.clientX}px`);
        cursorGlow.style.setProperty("--y", `${event.clientY}px`);
    }, { passive: true });
}

const animatedCards = document.querySelectorAll(".card, .experience-item, .bibliography li");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    animatedCards.forEach((item) => observer.observe(item));
} else {
    animatedCards.forEach((item) => item.classList.add("is-visible"));
}

typeEffect();
