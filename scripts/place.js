document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;


function calculateWindChill(temperature, windSpeed) {
  return temperature <= 10 && windSpeed > 4.8 ? 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16) : "N/A";
}

document.addEventListener('DOMContentLoaded', () => {
  const weatherSection = document.querySelector('.weather ul');
  const windChill = document.createElement('li');
  windChill.innerHTML = `<strong>Label:</strong> ${calculateWindChill(temperature, windSpeed)}°C`;
  weatherSection.appendChild(windChillItem);
});