const toggle = document.getElementById("theme-toggle");


/* =========================
   LOAD SAVED THEME
========================= */

const savedTheme = localStorage.getItem("theme");


if (savedTheme) {

  document.documentElement.setAttribute(
    "data-theme",
    savedTheme
  );

  updateIcon(savedTheme);

}



/* =========================
   TOGGLE DARK MODE
========================= */

toggle.addEventListener("click", () => {

  const currentTheme =
    document.documentElement.getAttribute("data-theme");


  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";


  document.documentElement.setAttribute(
    "data-theme",
    newTheme
  );


  localStorage.setItem(
    "theme",
    newTheme
  );


  updateIcon(newTheme);

});



/* =========================
   UPDATE ICON
========================= */

function updateIcon(theme) {

  if (theme === "dark") {

    toggle.textContent = "☀";

  } else {

    toggle.textContent = "◐";

  }

}
