console.log("Proyecto cargado correctamente desde la carpeta Back.");

// 1. Usamos un selector consistente
const botonInfo = document.getElementById('btn-mas-info');
const seccionExtra = document.getElementById('info-extra');

// 2. Verificamos que los elementos existan antes de añadir el evento
if (botonInfo && seccionExtra) {
    
    botonInfo.addEventListener('click', () => {
        // 3. Lógica de "Toggle" (Alternar)
        if (seccionExtra.style.display === 'none') {
            // Mostrar información
            seccionExtra.style.display = 'block';
            botonInfo.textContent = 'Ver menos';
            botonInfo.style.backgroundColor = '#ff4444'; // Cambia color al abrir
        } else {
            // Ocultar información
            seccionExtra.style.display = 'none';
            botonInfo.textContent = 'Más información';
            botonInfo.style.backgroundColor = ''; // Vuelve al color original
        }

        console.log("Estado de la información cambiado.");
    });

} else {
    console.warn("No se encontraron los elementos necesarios en el DOM.");
}