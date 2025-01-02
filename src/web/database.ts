import { initDatabase } from "./databaseInit";
import { Project } from "./models";


export class Database {
    constructor() {
        const dbRequest = this.#getRequest();
        dbRequest.onupgradeneeded = event => {
            const db = (event.target as any).result;

            const store = db.createObjectStore('projects', { keyPath: 'id' });
            store.createIndex('title', 'title');
            store.createIndex('iterations', 'iterations');
            store.createIndex('staves', 'staves');
            store.createIndex('style', 'style');
            store.createIndex('created', 'created');
            store.createIndex('updated', 'updated');

            initDatabase((project: Project) => this.update(project, () => {}));
        };
    }

    get(title: string, callback: (project: Project) => void, errCallback: (() => void) | null = null) {
        const dbRequest = this.#getRequest();
        dbRequest.onsuccess = () => {
            const store = this.#getProjectsStore(dbRequest);
            const storeRequest = store.get(title);
            storeRequest.onsuccess = () => {
                callback(storeRequest.result);
            };
            if (errCallback !== null) {
                storeRequest.onerror = () => { 
                    errCallback();
                };
            }
        };
    }

    update(project: Project, callback: (project: Project) => void) {
        const dbRequest = this.#getRequest();
        dbRequest.onsuccess = () => {
            const db = dbRequest.result; 
            const transaction = db.transaction(["projects"], "readwrite");
            const store = transaction.objectStore('projects');
            const storeRequest = store.put(project);
            storeRequest.onsuccess = () => { callback(project); }
        };
    }

    remove(title: string, callback: () => void) {
        const dbRequest = this.#getRequest();
        dbRequest.onsuccess = () => {
            const store = this.#getProjectsStore(dbRequest);
            const storeRequest = store.delete(title);
            storeRequest.onsuccess = () => { callback(); }
        };
    }

    list(callback: (project: Project) => void, limit = -1) {
        let count = 0;
        const dbRequest = this.#getRequest();
        dbRequest.onsuccess = () => {
            const store = this.#getProjectsStore(dbRequest);
            const index = store.index('updated');
            index.openCursor(null, "prev").onsuccess = (event) => {
                const cursor = (event.target as any).result;
                if (!cursor) {
                    return;
                }

                if (cursor.value.id == "__temp__") {
                    cursor.continue();
                    return;
                }

                callback(cursor.value);

                if (limit > 0 && count < limit) {
                    count += 1;
                    cursor.continue();
                }
            };
        };
    }
    
    #getRequest(): IDBOpenDBRequest {
        const dbRequest = window.indexedDB.open("Fractalang");
        dbRequest.onerror = (event) => { 
            alert("DB ERROR!"); 
            console.error("Database error:", event.target);
        };
        return dbRequest;
    }

    #getProjectsStore(dbRequest: IDBRequest): IDBObjectStore {
        const db = dbRequest.result; 
        const transaction = db.transaction(["projects"], "readwrite");
        const store = transaction.objectStore('projects');
        return store;
    }
}