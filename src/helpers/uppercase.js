// (Alternativa si deseas helpers separados y registrarlos manualmente)
// No se usa directamente porque registramos el helper en app.js,
// pero te dejamos este ejemplo por si el equipo prefiere esta organización.
export function uppercase(str) {
  return typeof str === "string" ? str.toUpperCase() : "";
}