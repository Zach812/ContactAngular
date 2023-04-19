import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactContComponent } from './contact-cont/contact-cont.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  declarations: [AppComponent, ContactCardComponent, ContactEditComponent, ContactContComponent, AddContactComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
