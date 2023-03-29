import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { C1Component } from './c1/c1.component';



@NgModule({
  declarations:[C1Component],
  imports: [
    CommonModule,IonicModule,FormsModule,
  ],
  exports: [C1Component]
})
export class ComponentsModule { }
