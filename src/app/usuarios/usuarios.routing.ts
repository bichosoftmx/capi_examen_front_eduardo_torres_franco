import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [

  

  {path: '', component: UsuariosComponent, data: {titulo: ''}},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
