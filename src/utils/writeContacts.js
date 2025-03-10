import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 4), 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
