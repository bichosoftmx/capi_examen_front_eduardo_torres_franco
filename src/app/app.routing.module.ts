import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosRoutingModule } from './usuarios/usuarios.routing';



const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: UsuariosComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    RouterModule,
    UsuariosRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
