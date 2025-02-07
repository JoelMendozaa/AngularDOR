import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { TiendaComponent } from '../tienda/tienda.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    TiendaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    TiendaComponent
  ]
})
export class GifsModule { }
