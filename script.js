document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    if (target) window.location.href = target;
  });
});
