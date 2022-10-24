
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

//Manejo de errores
request.onerror = event => {
    console.log('DB error:', event.target.error );
};


//Insertar datos
request.onsuccess = event => {
    let db = event.target.result;

    let heroesData = [
        { id: '1111', heroe: 'Spiderman', mensaje: 'Aquí su amigo Spiderman' },
        { id: '2222', heroe: 'Ironman', mensaje: 'Aquí su amigo Ironman' }

    ];


    let heroesTransaction = db.transaction('heores', 'readwrite');

    heroesTransactions.onerror = event => {
        console.log('Error guardado', event.target.error );
    };

    let heroesStore = heroesTransaction.objectStore('heroes');

    for ( let heroe of heroesData ) {
        heroesStore.add( heroe );
    }

    heroesStore.onsuccess = event => {
        console.log('Nuevo item agregado a la base de datos');
    };

    
};

