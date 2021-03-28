import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustrialComponent } from './industrial/industrial.component';
import { IndustrialAddComponent } from './industrial-add/industrial-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndustrialComponent, IndustrialAddComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
})
export class BusinussModule {}
