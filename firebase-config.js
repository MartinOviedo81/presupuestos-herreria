// firebase-config.js

// Importar funciones desde Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDirRKj8_-oleUdIhDl7LUud-Y9I_T7THQ",
  authDomain: "presupuestos-herreria.firebaseapp.com",
  projectId: "presupuestos-herreria",
  storageBucket: "presupuestos-herreria.firebasestorage.app",
  messagingSenderId: "824709991960",
  appId: "1:824709991960:web:2993a2886f6aa4def3bd6d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Exportar la base de datos para usarla en otros scripts
export { db };
