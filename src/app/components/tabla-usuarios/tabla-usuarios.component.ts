import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit, AfterViewInit {
  

  public columnas: string[] = ['name','email','domicilio'];
  @Input() data: any;

  public usuarios: any;

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;
  @ViewChild(MatSort)
  sort?: MatSort;

  constructor() { }



  ngOnInit(): void {  
  }

  ngAfterViewInit(): void {
    console.log('Obtengi tavka', this.data)
    this.usuarios = new MatTableDataSource<any>(this.data);
    this.usuarios.paginator = this.paginator;
    this.usuarios.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usuarios.filter = filterValue.trim().toLowerCase();

    if (this.usuarios.paginator) {
      this.usuarios.paginator.firstPage();
    }
  }



}
