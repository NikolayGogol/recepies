import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [ItemComponent],
  exports: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
