import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
  ],
})
export class ContactModule { }

