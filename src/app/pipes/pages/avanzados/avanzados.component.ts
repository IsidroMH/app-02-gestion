import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avanzados',
  templateUrl: './avanzados.component.html',
  styleUrls: ['./avanzados.component.css']
})
export class AvanzadosComponent implements OnInit {

  // Slice

  alumnos = ['Pedro','Juan','Alicia','Isidro'];

  coche = {
    marca: 'Mercedes',
    combustible: 'Gasolina',
    anioMatriculacion: 2007
  };

  alumnosMap = {
  '=0': 'No hay alumnos',
  '=1': 'Hay un alumno',
  'other': 'Hay # alumnos'

  };

  constructor() { }

  ngOnInit(): void {
  }

  borrarAlumno() {
    this.alumnos.pop();
  }


}
