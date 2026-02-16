//Variables---
// 1 de diciembre de 2025 a las 00:00:00
const startDate = new Date(2025, 11, 1, 0, 0, 0);
// Variable para el modo oscuro
const themeMode = document.getElementById("theme-mode");
//Variable para el icono
const iconThemeMode = document.querySelector(".icon-theme-mode");
//
const timeContainer = document.getElementById("time-container");
// ========== CONTADOR DE TIEMPO ==========
function updateCounter() {
  const now = new Date();
  const diffInMilliseconds = now - startDate;
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // Formatear el número con puntos como separador de miles
  const formattedSeconds = diffInSeconds.toLocaleString("de-DE");

  // Actualizar el span con id "time-container"
  timeContainer.textContent = formattedSeconds;
}

// Actualizar inmediatamente
if (timeContainer) {
  updateCounter();
  setInterval(updateCounter, 1000);
}

//theme-mode
themeMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    iconThemeMode.classList.remove("fa-sun");
    iconThemeMode.classList.add("fa-moon");
  } else {
    iconThemeMode.classList.remove("fa-moon");
    iconThemeMode.classList.add("fa-sun");
  }
});
