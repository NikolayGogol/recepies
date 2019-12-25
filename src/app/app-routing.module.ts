import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItemViewComponent} from './item-view/item-view.component';
import {AppComponent} from './app.component';
import {ListItemsComponent} from './items-list/items-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items/:id', component: ItemViewComponent},
  {path: 'items', component: ListItemsComponent},
  {path: 'home', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

