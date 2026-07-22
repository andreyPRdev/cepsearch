import { openDB } from "idb";

export const dbPromise = openDB("cadastro-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("cadastros")) {
        db.createObjectStore("cadastros", { keyPath: "id" });
    }
  }
});
