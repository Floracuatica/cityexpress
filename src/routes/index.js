import { Router } from "express";
import { cities } from "../data/cities.js";

const router = Router();

// Home: listado de ciudades
router.get("/", (req, res) => {
  res.render("home", {
    title: "Guía de Ciudades",
    cities
  });
});

// About: información de la app
router.get("/about", (req, res) => {
  res.render("about", {
    title: "Sobre esta app"
  });
});

// Ruta dinámica por id de ciudad
router.get("/city/:id", (req, res) => {
  const { id } = req.params;
  const city = cities.find(c => c.id === id);

  if (!city) {
    return res.status(404).render("404", {
      title: "Ciudad no encontrada",
      message: "La ciudad solicitada no existe. Vuelve al inicio para explorar otras."
    });
  }

  res.render("city", {
    title: city.name,
    city
  });
});

export default router;