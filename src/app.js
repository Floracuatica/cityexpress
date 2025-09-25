import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import router from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Motor Handlebars con layouts y parciales
app.engine("hbs", engine({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views", "partials"),
  defaultLayout: "main",
  helpers: {
    uppercase: (s) => (typeof s === "string" ? s.toUpperCase() : ""),
    eq: (a, b) => a === b
  }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Estáticos y variables globales
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => { res.locals.year = new Date().getFullYear(); next(); });

// Rutas
app.use("/", router);

// 404
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Página no encontrada",
    message: "La ruta que buscas no existe o ha sido movida."
  });
});

// Para Render
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
