// Simple animation on load
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Example JS interaction
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Project details coming soon!");
  });
});
