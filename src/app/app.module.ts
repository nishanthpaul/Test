import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Route } from '@angular/router'
import { ContactService } from './contact.service'
@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'contactDetail',
        component:ContactDetailComponent
      }
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
