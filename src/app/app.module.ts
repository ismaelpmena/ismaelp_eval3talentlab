import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { CarruselComponent } from './compartida/carrusel/carrusel.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';
import {HttpClientModule} from '@angular/common/http';
import { GeneralModule } from './general/general.module';
import { PagoComponent } from './general/pago/pago.component';

@NgModule({
  declarations: [
    AppComponent,
  HeaderComponent,
  HomeComponent,
  AsideComponent,
  CarruselComponent,
  FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    GeneralModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
