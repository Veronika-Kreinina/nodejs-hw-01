import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  const data = await readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
};

//   try {
//     const contacts = JSON.parse(data);
//     return Array.isArray(contacts) ? contacts : [];
//   } catch {
//     return [];
//   }
