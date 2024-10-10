// Array para almacenar las reservas
let reservas = [];

// Función para guardar la reserva
function guardarReserva(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtiene los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const caminata = document.getElementById('caminata').value;
    const fecha = document.getElementById('fecha').value;
    const participantes = document.getElementById('participantes').value;

    // Crea un objeto con la información de la reserva
    const reserva = {
        nombre,
        email,
        caminata,
        fecha,
        participantes
    };

    // Añade la reserva al array
    reservas.push(reserva);

    // Guarda el array en el localStorage
    localStorage.setItem('reservas', JSON.stringify(reservas));

    // Limpia el formulario
    event.target.reset();

}

// Agrega el event listener al formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', guardarReserva);
});