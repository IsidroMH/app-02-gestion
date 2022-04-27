import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombre: string = "Isidro"; 

  precio: number = 1224.3454;

  fecha: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
