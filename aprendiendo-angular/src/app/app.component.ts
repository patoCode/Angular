import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;

  constructor() {
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;

  }

  ocultarVideoJuegos() {
    this.mostrar_videojuegos = !this.mostrar_videojuegos;
  }
}
