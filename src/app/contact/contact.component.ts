import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contacts: Contact[];
  constructor(private service: ContactService) {
    service.getContacts().then(nish => this.contacts = nish);
  }
}
