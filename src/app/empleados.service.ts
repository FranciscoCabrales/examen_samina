import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Empleado } from '../app/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados: Empleado[] = [];
  private empleadosSubject: BehaviorSubject<Empleado[]> = new BehaviorSubject<Empleado[]>([]);


  constructor() { }

  agregarEmpleado(empleado: Empleado): void {
    this.empleados.push(empleado);
    this.empleados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    this.empleadosSubject.next(this.empleados);
  }

  obtenerEmpleados(): Observable<Empleado[]> {
    return this.empleadosSubject.asObservable();
  }
}
