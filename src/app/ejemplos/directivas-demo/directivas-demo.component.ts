import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-demo',
  templateUrl: './directivas-demo.component.html',
  styleUrls: ['./directivas-demo.component.scss']
})
export class DirectivasDemoComponent {
  seccionActiva = 0;
  alumnos = [
    {nombre: "Luis Angel"},
    {nombre: "Jesús Pedro"},
    {nombre: "Wilfredo"},
    {nombre: "Luis Gabriel"}
  ];
  cursos = [
    {nombre: "Desarrollo de aplicaciones Web 1", precio: 3500},
    {nombre: "Base de datos", precio: 2500},
    {nombre: "Gestión de Proyectos", precio: 1500},
    {nombre: "Desarrollo de aplicaciones Web 2", precio: 4500},
    {nombre: "Desarrollo de aplicaciones móviles", precio: 3000}
  ];
  currentDate = new Date();

  mostrarAlumnos(): void{
    this.seccionActiva = 0;
  }
  mostrarCursos(): void {
    this.seccionActiva = 1;
  }

}
