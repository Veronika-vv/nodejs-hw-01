import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};
