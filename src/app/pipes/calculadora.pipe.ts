import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

    transform(value_one: any, value_two: any) {
        let operaciones = `
        Suma: ${value_one + value_two}
        Resta: ${value_one - value_two}
        Multiplicación: ${value_one * value_two}
        `;

        return operaciones;
    }

}