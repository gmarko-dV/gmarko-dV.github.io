# 🎯 Trivia Challenge

Aplicación web de Trivia desarrollada en React con Vite que consume la API pública de Open Trivia Database. Los usuarios pueden responder preguntas de diferentes categorías y niveles de dificultad, recibiendo retroalimentación inmediata sobre sus respuestas.

## 📋 Descripción del Proyecto

Trivia Challenge es una aplicación interactiva que presenta preguntas de trivia obtenidas de la API pública de Open Trivia Database. La aplicación permite a los usuarios:

- Ver preguntas destacadas en la página principal
- Responder preguntas interactivas con opciones múltiples
- Recibir retroalimentación inmediata sobre sus respuestas
- Navegar entre diferentes secciones de la aplicación

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción y desarrollo
- **React Router DOM** - Enrutamiento para aplicaciones React
- **CSS Personalizado** - Estilos minimalistas y modernos

## 🚀 Pasos para Ejecutar el Servidor

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/gmarko-dV/gmarko-dV.github.io.git
cd gmarko-dV.github.io
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🌐 Deploy en GitHub Pages

El proyecto está desplegado en **GitHub Pages**:

🔗 **URL del Deploy:** [https://gmarko-dv.github.io](https://gmarko-dv.github.io)

### Para desplegar manualmente:

1. Construye el proyecto:
```bash
npm run build
```

2. Sube la carpeta `dist` a tu repositorio en la rama `gh-pages` o usa GitHub Actions (automático cuando haces push a `main`)

3. Ve a Settings > Pages en tu repositorio de GitHub
4. Selecciona la fuente según tu método de deploy:
   - **GitHub Actions** (recomendado - automático)
   - **Branch: gh-pages** (si haces deploy manual)

## 📹 Video Demo

[[CLICK AQUI PARA VER LA DEMOSTRACION](https://www.youtube.com/watch?v=0nCpBammcoA)]

## 📁 Estructura del Proyecto

```
trivia-react/
├── src/
│   ├── components/
│   │   ├── Home.tsx          # Componente de la página principal
│   │   ├── Entities.tsx       # Componente de preguntas interactivas
│   │   └── Navigation.tsx     # Componente de navegación
│   ├── services/
│   │   └── triviaApi.ts       # Servicio para consumir la API
│   ├── types/
│   │   └── trivia.ts          # Tipos TypeScript
│   ├── App.tsx                # Componente principal con rutas
│   ├── main.tsx               # Punto de entrada
│   └── index.css              # Estilos globales minimalistas
├── index.html
├── vite.config.ts
└── package.json
```

## 📝 API Utilizada

La aplicación consume la API pública de Open Trivia Database:

**Endpoint:** `https://opentdb.com/api.php?amount=10`

## ✨ Características

- ✅ Consumo de API pública de Open Trivia Database
- ✅ Ruta Home (/) con hero section y listado de preguntas destacadas
- ✅ Ruta /entities para mostrar todas las preguntas con opciones interactivas
- ✅ Navegación con React Router
- ✅ Diseño minimalista y responsive
- ✅ Decodificación de entidades HTML en las preguntas
- ✅ Validación de respuestas en tiempo real con retroalimentación visual
