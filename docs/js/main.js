document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is connected ✅");
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.textContent = "CSS + JS are working!";
  }
});
