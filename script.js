document.querySelectorAll('.espacio').forEach(espacio => {
    espacio.addEventListener('click', () => {
        const estadoActual = espacio.getAttribute('data-estado');
        let nuevoEstado;

        switch (estadoActual) {
            case 'libre':
                nuevoEstado = 'ocupado';
                break;
            case 'ocupado':
                nuevoEstado = 'mantenimiento';
                break;
            case 'mantenimiento':
                nuevoEstado = 'libre';
                break;
        }

        espacio.setAttribute('data-estado', nuevoEstado);
    });
});