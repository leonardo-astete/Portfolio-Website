// 1 de diciembre de 2025 a las 00:00:00
const startDate = new Date(2025, 11, 1, 0, 0, 0);

function updateCounter() {
  const now = new Date();
  const diffInMilliseconds = now - startDate;
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  // Formatear el número con puntos como separador de miles
  const formattedSeconds = diffInSeconds.toLocaleString("de-DE");

  // Actualizar el span con id "time-container"
  document.getElementById("time-container").textContent = formattedSeconds;
}

// Actualizar inmediatamente
updateCounter();

// Actualizar cada segundo
setInterval(updateCounter, 1000);
