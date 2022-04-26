import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';


@NgModule({
  declarations: [
    ClienteDetalleComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
