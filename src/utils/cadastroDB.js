import { dbPromise } from "./db";

// Busca todos os cadastros
export const getCadastrosDB = async () => {
  const db = await dbPromise;
  return db.getAll("cadastros");
};

// Salva um cadastro
export const saveCadastroDB = async (cadastro) => {
  const db = await dbPromise;
  return db.put("cadastros", cadastro);
};