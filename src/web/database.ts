import { Project } from "./models";


export class Database {
    constructor() {
        const dbRequest = this.#getRequest();
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onupgradeneeded = event => {
            const db = (event.target as any).result;

            const store = db.createObjectStore('projects', { keyPath: 'title' });
            store.createIndex('iterations', 'iterations');
            store.createIndex('staves', 'staves');
            store.createIndex('style', 'style');
            store.createIndex('created', 'created');
            store.createIndex('updated', 'updated');
        };
    }

    update(project: Project) {
        const dbRequest = this.#getRequest();
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const db = dbRequest.result; 
            const transaction = db.transaction(["projects"], "readwrite");
            const store = transaction.objectStore('projects');
            store.put(project);
        };
    }

    remove(project: Project) {
        const dbRequest = this.#getRequest();
        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const store = this.#getProjectsStore(dbRequest);
            store.delete(project.title);
        };
    }

    list(callback: (title: string) => void) {
        const dbRequest = this.#getRequest();

        dbRequest.onerror = () => { alert("DB ERROR!"); };
        dbRequest.onsuccess = () => {
            const store = this.#getProjectsStore(dbRequest);
            store.openKeyCursor().onsuccess = (event) => {
                const cursor = (event.target as any).result;
                if (!cursor) {
                    return;
                }
                callback(cursor.key);
                cursor.continue();
            };
        };
    }
    
    #getRequest(): IDBOpenDBRequest {
        const dbRequest = window.indexedDB.open("Fractalang", 1);
        return dbRequest;
    }

    #getProjectsStore(dbRequest: IDBRequest): IDBObjectStore {
        const db = dbRequest.result; 
        const transaction = db.transaction(["projects"], "readwrite");
        const store = transaction.objectStore('projects');
        return store;
    }
}