import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactContComponent } from './contact-cont/contact-cont.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

const routes: Routes = [
  { path: 'home', component: ContactContComponent },
  { path: 'edit/:id', component: ContactEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
