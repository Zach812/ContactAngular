import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';
import { ContactsService } from '../contacts.service';
ContactsService;
CONTACTS;
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  constructor(private contactService: ContactsService) {}
  contact: Contact = {
    id: CONTACTS.length,
    fName: '',
    lName: '',
    email: '',
    phoneNum: '',
  };
  addContact() {
    this.contactService.addContact(this.contact);
  }
}
