# City Guide Express (Express + Handlebars)

Aplicación base para la actividad grupal: guía informativa de ciudades del mundo.

## Requisitos
- Node.js 18+

## Instalación
```bash
npm install
```

## Ejecutar en desarrollo
```bash
npm run dev
```
Abre http://localhost:3000

## Ejecutar en producción
```bash
npm start
```

## Estructura
```
src/
  app.js
  data/cities.js
  helpers/uppercase.js
  routes/index.js
  views/
    layouts/main.hbs
    home.hbs
    city.hbs
    about.hbs
    404.hbs
    partials/
      header.hbs
      footer.hbs
      cityCard.hbs
  public/
    css/styles.css
    img/ (imágenes)
