import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Contact } from './Contact';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

  findNewId() {
    const ids: number[] = [];
    CONTACTS.map((movie) => ids.push(movie.id));
    return Math.max(...ids) + 1;
  }

  addContact(contact: Contact) {
    CONTACTS.push(contact);
  }

  getContact(id: number) {
    const contact = CONTACTS.find((h) => h.id == id);
    return contact;
  }

  getContacts() {
    return CONTACTS;
  }

  saveContact(contact: Contact) {
    const index = CONTACTS.indexOf(contact);
    CONTACTS[index] = contact;
  }

  deleteContact(contact: Contact) {
    const index = CONTACTS.indexOf(contact);
    CONTACTS.splice(index, 1);
  }
}
