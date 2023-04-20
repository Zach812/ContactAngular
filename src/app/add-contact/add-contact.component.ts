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
    id: this.contactService.findNewId(),
    fName: '',
    lName: '',
    email: '',
    phoneNum: '',
  };
  message = '';
  checkContact(): boolean {
    if (
      this.contact.fName != '' &&
      this.contact.lName != '' &&
      this.contact.email != '' &&
      this.contact.phoneNum != ''
    ) {
      return true;
    }
    return false;
  }

  addContact() {
    if (this.checkContact()) {
      this.contactService.addContact(this.contact);
      this.message = '';
      return;
    }
    this.message = 'Please fill out all of the feilds!';
  }
}
