import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla'


@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit {

    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: Array<string>;
    public mi_marca: string;

    constructor() {
        //this.mi_marca = "Fila";
        this.titulo = "Hola desde zapatillas"
        this.zapatillas = [
            new Zapatilla('Rebook', 'Rebook', 'blanco', 70, true),
            new Zapatilla('Nike', 'Nike', 'negra', 80, true),
            new Zapatilla('Vans', 'Vans', 'roja', 85, false),
            new Zapatilla('Adidas', 'adidas', 'verde', 180, true)
        ]
        this.marcas = []
    }

    ngOnInit() {
        console.log(this.zapatillas)
    }

    getMarca() {
        alert(this.mi_marca);
    }
    addMarca() {
        this.marcas.push(this.mi_marca)
    }
}
