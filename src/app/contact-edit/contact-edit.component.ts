import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css'],
})
export class ContactEditComponent implements OnInit {
  contact: any;
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactsService.getContact(id);
  }

  saveContact(): void {
    this.contactsService.saveContact(this.contact);
  }

  goBack() {
    this.location.back();
  }
}
