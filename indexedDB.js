let database;

window.onload = function () {
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
    }

    let request = window.indexedDB.open('photo_database', 1);

    request.onerror = function () {
        console.log('Database failed to open');
    };

    request.onsuccess = function () {
        console.log('Database opened succesfully');
        database = request.result;
        //displayData();
    };

    request.onupgradeneeded = function (event) {
        let database = event.target.result; //database = request.result;랑 어떻게 다른지
        if (!database.objectStoreNames.contains('photo_os')) {
        let objectStore = database.createObjectStore('photo_os', { keyPath: 'id', autoIncrement: true });
            console.log('Database setup complete');

            // objectStore.createIndex('mp4', 'mp4', { unique: false });
            // objectStore.createIndex('webm', 'webm', { unique: false });
        }
    };

    function addPicture(event) {
        let newPhoto = { title: "portrait", body: "portrait photo" };
        let transaction = db.transaction(['photo_os'], 'readwrite');
        let objectStore = transaction.objectStore('photo_os');
        let request = objectStore.add(newPhoto);
        transaction.oncomplete = function () {
            console.log('Transaction completed: database modification finished.');
        }

        transaction.onerror = function () {
            console.log('Transaction not opened due to error');
        };
    }

    function displayPhoto() { }
    function deletePhoto() { }

}