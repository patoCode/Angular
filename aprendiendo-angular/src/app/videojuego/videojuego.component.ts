import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de videojuego(s)";
        console.log(this.titulo);
    }

    ngOnInit() {
        console.log("ON INIT EJECUTADO")
    }

    ngDoCheck() {
        console.log("Docheck Ejecutado")
    }

    ngOnDestroy() {
        console.log("OnDestroy ejecutado") // solo cuando se elimina el componente
    }

    cambiarTitulo() {
        this.titulo = "Nuevo titulo";
    }

}

