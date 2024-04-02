import { Component } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { Empleado } from './empleado';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleadoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private empleadosService: EmpleadosService) {
    this.empleadoForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      telefono: ['']
    });
  }

  agregarEmpleado(): void {
    const empleado: Empleado = this.empleadoForm.value;
    this.empleadosService.agregarEmpleado(empleado);
    this.empleadoForm.reset();
  }

  
}
