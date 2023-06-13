import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPAgeComponent } from './footer-page/footer-page.component';
import { InicioPageComponent } from './inicio-page/inicio-page.component';
import { QuienesSomosPageComponent } from './quienes-somos-page/quienes-somos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPAgeComponent,
    InicioPageComponent,
    QuienesSomosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
