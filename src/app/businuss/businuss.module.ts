import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressModalComponent } from './components/address-modal/address-modal.component';
import { IndustrialAddComponent } from './components/industrial-add/industrial-add.component';
import { IndustrialComponent } from './components/industrial/industrial.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    IndustrialComponent,
    IndustrialAddComponent,
    FilterPipe,
    AddressModalComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule, FormsModule],
})
export class BusinussModule {}
