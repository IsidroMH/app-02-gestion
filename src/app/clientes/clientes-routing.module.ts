import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteDetalleComponent } from './pages/cliente-detalle/cliente-detalle.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ClienteComponent
      }
      ,
      {
        path: 'verlistado',
        component: ClienteDetalleComponent
      }
      ,
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
