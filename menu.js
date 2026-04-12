// Highlight menu card on click
document.querySelectorAll(".menu-card").forEach(card => {
    card.addEventListener("click", () => {
        card.style.border = "2px solid black";
        setTimeout(() => {
            card.style.border = "none";
        }, 500);
    });
});

// Simple filter example (optional if you add buttons later)
function filterMenu(category) {
    const items = document.querySelectorAll(".menu-card");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            if (item.innerText.toLowerCase().includes(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}