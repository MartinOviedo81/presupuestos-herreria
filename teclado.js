// Funciones para el teclado numérico
function insertarEnInput(valor) {
  const input = document.getElementById('input-detalle');
  input.value += valor;
}

function borrarUltimoCaracter() {
  const input = document.getElementById('input-detalle');
  const texto = input.value;
  input.value = texto.slice(0, -1);
}

function limpiarInput() {
  const input = document.getElementById('input-detalle');
  input.value = '';
}

// Funciones para el modal de ayuda
function mostrarAyudaExpresiones() {
  document.getElementById('ayuda-modal').style.display = "block";
}

function cerrarAyudaExpresiones() {
  document.getElementById('ayuda-modal').style.display = "none";
}

// Funciones para el modal de imágenes
window.abrirModal = function(url) {
  const modal = document.getElementById('imagen-modal');
  const imgAmpliada = document.getElementById('img-ampliada');
  imgAmpliada.src = url;
  modal.style.display = "block";
}

// Cerrar modal al hacer clic en la X
document.querySelector('.cerrar-modal').onclick = function() {
  document.getElementById('imagen-modal').style.display = "none";
}

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById('imagen-modal').onclick = function(e) {
  if (e.target === this) {
    this.style.display = "none";
  }
}

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('imagen-modal').style.display = "none";
    document.getElementById('ayuda-modal').style.display = "none";
  }
}); 