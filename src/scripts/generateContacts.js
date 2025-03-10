import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let index = 0; index < number; index++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }
  await writeContacts(contacts);
};

generateContacts(5);
