# [ONE PIECE WANTED - Proyecto DAM](https://theyinyan.github.io/ProyectoAPI/index.html)

## 📌 Descripción

Este proyecto consiste en el desarrollo de una **aplicación web** que consume datos de la **API pública de One Piece** para mostrar información del universo creado por Eiichiro Oda. La aplicación presenta los datos en formato de **carteles "WANTED"** (Se Busca), emulando el estilo visual de los carteles de recompensa del anime.

El proyecto ha sido desarrollado como parte del módulo **Lenguajes de Marcas y Sistemas de Gestión de Información** del ciclo formativo **Desarrollo de Aplicaciones Multiplataforma (DAM)**.

---

## 👀 Como ver el proyecto en acción:

### Localmente

1. **Descargar o clonar** el repositorio
2. **Extraer** el contenido del archivo `.rar` (si está comprimido)
3. **Abrir** el archivo `index.html` en un navegador web moderno (Chrome, Firefox, Edge, Safari)
4. **Navegar** por las diferentes secciones usando el menú superior

### En línea
El proyecto está alojado en GitHub Pages y se puede acceder a través del siguiente enlace:
[Ver 👀](https://theyinyan.github.io/ProyectoAPI/index.html)

---

## 🎯 Funcionalidades

| Funcionalidad | Descripción |
|---------------|-------------|
| 🏴‍☠️ **Personajes** | Muestra carteles WANTED de personajes con nombre, ocupación, afiliación, edad, altura y fruta del diablo |
| 🍎 **Frutas del Diablo** | Muestra información sobre las frutas DF con nombre, tipo, descripción y poderes |
| ⚔️ **Gears de Luffy** | Listado de todos los Gears de Monkey D. Luffy (Gear 2, 3, 4, 5) con descripciones |
| ⚡ **Técnicas de Luffy** | Listado de técnicas del protagonista, clasificadas por Gear asociado |
| ⛵ **Artefactos** | Catálogo de Espadas, Barcos y Diales del mundo de One Piece |
| 👤 **Sobre mí** | Página personal con información del autor del proyecto |

### Características técnicas

- ✅ Consumo de **múltiples endpoints** de la API de One Piece
- ✅ **Paginación** en todos los listados (4 items por página)
- ✅ **Cambio entre modos** (Técnicas/Gears, Espadas/Barcos/Diales)
- ✅ **Diseño responsivo** adaptable a móviles, tablets y desktop
- ✅ **Animaciones CSS** (hover, transiciones, efectos visuales)
- ✅ **Control de errores** con mensajes amigables
- ✅ **Datos por defecto** si la API no responde

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica de las páginas |
| **CSS3** | Estilos, animaciones y diseño responsivo |
| **JavaScript (ES6)** | Lógica de la aplicación, consumo de API |
| **Fetch API** | Peticiones asíncronas a la API (.then, sin async/await) |
| **Google Fonts** | Fuentes personalizadas (Bangers, Black Ops One, etc.) |

---

## 📁 Estructura del Proyecto

```text
PROYECTOAPI/
│
├── 📂 img/                        # Imágenes utilizadas
│   ├── icon.png                   # Favicon de la aplicación
│   ├── Header.jpg                 # Imagen de fondo del header
│   └── luffy.jpg                  # Imagen de Monkey D. Luffy
│
├── 📂 js/                         # Archivos JavaScript
│   ├── script.js                  # Lógica principal (personajes y frutas)
│   ├── luffy.js                   # Lógica de Gears y Técnicas de Luffy
│   └── artefactos.js              # Lógica de Espadas, Barcos y Diales
│
├── 📂 page/                       # Páginas HTML secundarias
│   ├── luffy.html                 # Página dedicada a Luffy
│   ├── artefactos.html            # Página de artefactos
│   └── sobremi.html               # Página "Sobre mí"
│
├── 📄 index.html                  # Página principal
├── 📄 style.css                   # Estilos globales
└── 📄 README.md                   # Documentación del proyecto
```

---

## 🌐 API Utilizada

**One Piece API** - Documentación oficial: [api-onepiece.com](https://api-onepiece.com/en/documentation)

### Endpoints consumidos

| Endpoint | Datos obtenidos |
|----------|-----------------|
| `/v2/characters/en` | Personajes del universo One Piece |
| `/v2/fruits/en` | Frutas del diablo |
| `/v2/luffy-gears/en` | Gears de Monkey D. Luffy |
| `/v2/luffy-techniques/en` | Técnicas de Luffy |
| `/v2/swords/en` | Espadas del mundo One Piece |
| `/v2/boats/en` | Barcos piratas |
| `/v2/dials/en` | Diales de Skypiea |

---

## 🚀 Instalación y Uso

### Requisitos previos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet (para consumir la API)

### Pasos para ejecutar

1. **Descargar o clonar** el repositorio
2. **Extraer** el contenido del archivo `.rar` (si está comprimido)
3. **Abrir** el archivo `index.html` en el navegador
4. **Navegar** usando el menú superior

### Estructura de navegación

```
Inicio → Personajes y Frutas del Diablo
Luffy → Gears y Técnicas del protagonista
Artefactos → Espadas, Barcos y Diales
Sobre mí → Información del autor
```

---

## 🎨 Estilo Visual

El diseño está inspirado en el universo de One Piece con:

| Elemento | Estilo |
|----------|--------|
| **Colores** | Rojo (#8B0000), dorado (#FFD700), pergamino envejecido |
| **Fuentes** | Bangers (títulos), Black Ops One (nombres), Special Elite (detalles) |
| **Fondos** | Textura de madera y mapa del tesoro |
| **Tarjetas** | Borde doble rojo estilo "WANTED" |
| **Animaciones** | Hover con elevación, efecto "Gomu Gomu" en botones |

---

## 📱 Responsividad

| Dispositivo | Ancho máximo | Adaptaciones |
|-------------|--------------|--------------|
| **Desktop** | > 768px | Diseño completo, dos columnas |
| **Tablet** | 768px - 480px | Tarjetas más pequeñas |
| **Móvil** | < 480px | Una columna, fuentes reducidas |

---

## ✅ Requisitos Cumplidos

| Requisito | Estado |
|-----------|--------|
| Favicon y título | ✅ |
| Header, main, footer (header arriba / footer abajo) | ✅ |
| Menú con mínimo 2 páginas | ✅ (4 páginas) |
| Página "Sobre mí" con nombre y ciclo | ✅ |
| Animaciones CSS | ✅ |
| Consumo de API externa | ✅ |
| Múltiples endpoints | ✅ (7 endpoints) |
| Evento DOMContentLoaded + click | ✅ |
| Funciones propias documentadas | ✅ |
| Control de errores | ✅ |
| Fetch + .then (sin async/await) | ✅ |

---

## 📄 Licencia

Proyecto educativo sin fines comerciales.  
One Piece es propiedad de Eiichiro Oda, Shueisha, Toei Animation.

---

## ¡Gracias por visitar el proyecto!

> *"Yo seré el Rey de los Programadores, ¡y este es mi tesoro!"* 