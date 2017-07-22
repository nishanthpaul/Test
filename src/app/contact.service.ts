import { Injectable } from '@angular/core';
import { Contact } from "./contact";
import { CONTACTS } from "./mock-contact";

@Injectable()
export class ContactService {

  constructor() { }

  getContacts(): Promise<Contact[]> {
    return Promise.resolve(CONTACTS);
  }
}


