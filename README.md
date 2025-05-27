# Linda Herrería - Sistema de Presupuestos

Sistema web para gestión de presupuestos y pedidos de herrería, desarrollado con HTML, CSS y JavaScript, utilizando Firebase como backend.

## Características

- 🛠️ Creación y gestión de presupuestos
- 📋 Gestión de pedidos con estados
- 📊 Contador de pedidos por estado
- 📱 Diseño responsive
- 🌙 Modo oscuro
- 🔄 Actualización en tiempo real
- 📸 Galería de imágenes
- 📲 Compartir por WhatsApp

## Configuración

1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/presupuestos-herreria.git
cd presupuestos-herreria
```

2. Crear archivo `firebase-config.js` con tus credenciales:
```javascript
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "TU_MESSAGING_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

3. Abrir `index.html` en tu navegador

## Estructura del Proyecto

- `index.html` - Página principal de presupuestos
- `lista-pedidos.html` - Gestión de pedidos
- `cargar-materiales.html` - Carga de materiales
- `config-tareas.html` - Configuración de tareas
- `galeria.html` - Galería de imágenes
- `style.css` - Estilos globales

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase (Firestore)
- Lucide Icons

## Contribuir

1. Hacer fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información. 