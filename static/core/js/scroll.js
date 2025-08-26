document.addEventListener("DOMContentLoaded", () => {
  const offset = 90; // adjust this number as needed

  function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"));
    });
  });

  if (window.location.hash) {
    smoothScroll(window.location.hash);
  }
});
