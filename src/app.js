import path from "path";
import express from "express";
import hbs from "hbs";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar carpetas de vistas y parciales
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// Helper global: uppercase
hbs.registerHelper("uppercase", (str) => (typeof str === "string" ? str.toUpperCase() : ""));

// Helper para comparar (opcional)
hbs.registerHelper("eq", (a, b) => a === b);

// Archivos estáticos (imágenes, CSS, JS del front)
app.use(express.static(path.join(__dirname, "public")));

// Middleware para variables globales de vistas (e.g., año)
app.use((req, res, next) => {
  res.locals.year = new Date().getFullYear();
  next();
});

// Rutas
app.use("/", router);

// Ruta 404 final (cualquier otra ruta)
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Página no encontrada",
    message: "La ruta que buscas no existe o ha sido movida."
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
