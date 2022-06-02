import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Injectable()
export class ZapatillaService {

    public zapatillas: Array<Zapatilla>;

    constructor() {
        this.zapatillas = [
            new Zapatilla('Rebook Classic', "Rebook", "Red", 50, true),
            new Zapatilla('Nike ABCD', "Nike", "Blue", 60, true),
            new Zapatilla('Adida ABC', "Adidas", "White", 100, true),
            new Zapatilla('Nike XYZ', "Nike", "Blue", 50, true)
        ];
    }

    getTexto() {
        return "Hola Mundo desde Servicio Zapatilla";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;
    }
}