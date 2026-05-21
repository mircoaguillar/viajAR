document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const main = document.getElementById("main");
  const overlay = document.getElementById("overlay");
  const toggleButton = document.getElementById("menu-toggle");

  let menuAbierto = false;

  function abrirMenu() {
    menu.classList.add("menu-visible");
    overlay.classList.add("visible");
    menuAbierto = true;
  }

  function cerrarMenu() {
    menu.classList.remove("menu-visible");
    overlay.classList.remove("visible");
    menuAbierto = false;
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      if (menuAbierto) {
        cerrarMenu();
      } else {
        abrirMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function () {
      cerrarMenu();
    });
  }
});
