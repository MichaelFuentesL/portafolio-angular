import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


  // page
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PortafolioComponent} from './pages/portafolio/portafolio.component';
import {AboutComponent} from './pages/about/about.component';
import {ItemComponent} from './pages/item/item.component';

  // rutas
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
