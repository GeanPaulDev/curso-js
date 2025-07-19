let nombre = prompt("¿Cuál es tu nombre?");
if (nombre === null || nombre.trim() === "") {
  nombre = "Gean Paul Dafault!";
}
document.querySelector(
  ".contenido"
).innerHTML = `${nombre} está aprendiendo Javascript`;
