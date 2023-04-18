import { Component, Input } from '@angular/core';
import { Contact } from '../Contact';
import { ContactsService } from '../contacts.service';
ContactsService;
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  @Input() contact: Contact = {
    id: NaN,
    fName: '',
    lName: '',
    phoneNum: '',
    email: '',
  };
  constructor(private contactsService: ContactsService) {}
  handleDelete() {
    this.contactsService.deleteContact(this.contact);
  }
}
