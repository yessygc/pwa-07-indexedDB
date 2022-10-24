
// indexedDB: Reforzamiento
let request = window.indexDB.open('mi-database', 1);

//Actualiza cuando se crea o se sube de versión de la BD
request.onupgradeneeded = event => {

    console.log('Actualización de BD');

    let db = event.terget.result;

    db.createObjectStore('heroes', {
        keyPath: 'id'

    });

};

