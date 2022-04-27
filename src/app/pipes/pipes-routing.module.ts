import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { AvanzadosComponent } from './pages/avanzados/avanzados.component';
import { HomeComponent } from '../pipes/pages/home/home.component';

const routes: Routes = [

{
  path: '',
  component: HomeComponent,

  children: [
    {
      path: 'basicos',
      component: BasicosComponent
    }
    ,
    {
      path: 'avanzados',
      component: AvanzadosComponent
    }
    ,
    {
      path: '**',
      redirectTo: 'basicos'
    }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
