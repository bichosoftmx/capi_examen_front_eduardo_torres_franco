import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TablaUsuariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    TablaUsuariosComponent
  ]
})
export class ComponentsModule { }
