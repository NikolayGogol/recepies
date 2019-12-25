import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ItemViewComponent} from './item-view/item-view.component';
import {ComponentsModule} from '../components/components.module';
import {ListItemsComponent} from './items-list/items-list.component';
import {ItemsService} from '../services/items.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule, MatPaginatorModule, MatSliderModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ItemViewComponent,
    ListItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
