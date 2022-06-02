import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {

    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de los juegos más populares";

        console.log('Componente Videojuego creado');
    }

    ngOnInit(): void {

    }

    ngDoCheck(): void {
        console.log('ngDoCheck ejecutado');
    }

    ngOnDestroy(): void {
        console.log('Componente eliminado');
    }

    cambiarTitulo() {
        this.titulo = 'Nuevo titulo';
    }
}