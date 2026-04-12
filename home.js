// Smooth scroll (if links exist)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

// Hero button action
const heroBtn = document.querySelector(".hero-text button");

if (heroBtn) {
    heroBtn.addEventListener("click", () => {
        window.location.href = "menu.html";
    });
}

// Simple fade-in effect
window.addEventListener("load", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "1s";
        document.body.style.opacity = 1;
    }, 100);
});