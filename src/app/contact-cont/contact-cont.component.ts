import { Component } from '@angular/core';
import { Contact } from '../Contact';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-contact-cont',
  templateUrl: './contact-cont.component.html',
  styleUrls: ['./contact-cont.component.css'],
})
export class ContactContComponent {
  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {}

  getContacts() {
    this.contacts = this.contactsService.getContacts();
  }

  ngOnInit(): void {
    this.getContacts();
  }
}
