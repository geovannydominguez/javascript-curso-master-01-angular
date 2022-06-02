import { Component, OnInit } from "@angular/core";
import { Zapatilla } from '../models/zapatilla'
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

    public titulo: string;
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(private _zapatillaService: ZapatillaService) {
        this.titulo = "Componente Zapatillas";
        this.marcas = new Array();
        this.color = 'blue';
        this.mi_marca = 'Lotto';

        this.zapatillas = this._zapatillaService.getZapatillas();
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((value) => {

            // Sólo marcas No repetidos
            if (this.marcas.indexOf(value.marca) < 0)
                this.marcas.push(value.marca);
        });

        console.log(this.marcas);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index: number) {
        // delete this.marcas[index];
        this.marcas.splice(index, 1);
    }

    onBlur() {
        console.log('Has salido del Input');

    }

    mostrarPalabra() {
        console.log('La palabra ingresada es: ' + this.mi_marca);

    }

}