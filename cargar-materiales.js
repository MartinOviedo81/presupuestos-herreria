import { db } from './firebase-config.js';
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Lista de materiales iniciales
const materiales = [
  {
    nombre: "Hierro herrero redondo 9.52 mm",
    precio: 6897,
    largo: "6 mts",
    unidad: "barra"
  },
  {
    nombre: "Hierro herrero redondo 8 mm",
    precio: 5183,
    largo: "6 mts",
    unidad: "barra"
  },
  {
    nombre: "Hierro herrero redondo 6.35 mm",
    precio: 3213,
    largo: "6 mts",
    unidad: "barra"
  },
  {
    nombre: 'Hierro planchuela 1" x 1/8"',
    precio: 8426,
    largo: "6 mts",
    unidad: "barra"
  },
  {
    nombre: 'Hierro planchuela 1/2" x 1/8"',
    precio: 4200,
    largo: "6 mts",
    unidad: "barra"
  }
];

// Cargar materiales a Firestore
async function cargarMateriales() {
  for (const material of materiales) {
    try {
      const docRef = await addDoc(collection(db, "materiales"), material);
      console.log(`✅ Agregado: ${material.nombre} (ID: ${docRef.id})`);
    } catch (error) {
      console.error(`❌ Error al agregar ${material.nombre}:`, error);
    }
  }
}

cargarMateriales();
