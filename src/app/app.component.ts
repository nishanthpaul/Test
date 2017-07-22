import { Component } from '@angular/core';
import { Contact } from "./contact";
import { ContactService } from "./contact.service";

export const CONTACTS: Contact[] = [{
  id: 1, name: "a"
},
{
  id: 2, name: "b"
}]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';


}

