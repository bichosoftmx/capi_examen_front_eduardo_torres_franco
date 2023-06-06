import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public data: any;

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  
  
  obtenerUsuarios(){
    
    this.usuariosService.obtenerUsuarios().subscribe( response => {
      console.log('Obtengo usuarios ', response)
      if(response.status === 'success'){
        this.data = response.direccion;
        console.log('Mi data es', this.data)
      }else{
        this.data = '';
      }
    })
  }

}
