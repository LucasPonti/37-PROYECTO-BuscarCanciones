import * as UI from './interfaz.js'; //exporta todo lo que hay en ese archivo, todo tiene el alias de UI (UI.ejemplo)
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    // obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === '') {
        // mostrar error si hay campop vacion
        UI.divMensajes.textContent = 'ERROR! Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove();
        }, 3000);


    }

    // Consultar nuestra API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}


