import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contacts';
import { Contact } from './Contact';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor() {}

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
