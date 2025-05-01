// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js"; // 👈 AGREGADO

const firebaseConfig = {
  apiKey: "AIzaSyDirRKj8_-oleUdIhDl7LUud-Y9I_T7THQ",
  authDomain: "presupuestos-herreria.firebaseapp.com",
  projectId: "presupuestos-herreria",
  storageBucket: "presupuestos-herreria.appspot.com", // 👈 NECESARIO PARA STORAGE
  messagingSenderId: "824709991960",
  appId: "1:824709991960:web:2993a2886f6aa4def3bd6d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // 👈 INSTANCIAR STORAGE

export { db, storage }; // 👈 EXPORTAR AMBOS
