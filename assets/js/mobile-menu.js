document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".navigation-toggle");
  const menu = document.querySelector(".navigation-list");

  if (!menuToggle || !menu) return;

  document.addEventListener("click", function (e) {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedToggle = menuToggle.contains(e.target);

    if (!clickedInsideMenu && !clickedToggle) {
      const checkbox = document.getElementById("menu-toggle");
      if (checkbox) {
        checkbox.checked = false;
      }
    }
  });
});