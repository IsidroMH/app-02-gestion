import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// fichero de rutas principales
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { TemarioModule } from './temario/temario.module';
import { PipesModule } from './pipes/pipes.module';
import { PaisesModule } from './paises/paises.module';

//Cambiar el idioma/locale en la app

import localeES from "@angular/common/locales/es";
import { registerLocaleData} from '@angular/common';

registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    ClientesModule,
    TemarioModule,
    PipesModule,
    PaisesModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

