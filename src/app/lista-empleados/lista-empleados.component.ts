import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  
  empleados$: Observable<Empleado[]> | undefined;

  constructor(private empleadosService: EmpleadosService) { }


  ngOnInit(): void {
    this.empleados$ = this.empleadosService.obtenerEmpleados();
  }

}
