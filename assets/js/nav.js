document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("nav-dropdown");
  const trigger = document.getElementById("nav-dropdown-trigger");
  if (!dropdown || !trigger) return;

  function toggleDropdown(open) {
    const shouldOpen = open !== undefined ? open : !dropdown.classList.contains("open");
    dropdown.classList.toggle("open", shouldOpen);
    trigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  }

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleDropdown();
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      toggleDropdown(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dropdown.classList.contains("open")) {
      toggleDropdown(false);
      trigger.focus();
    }
  });
});
