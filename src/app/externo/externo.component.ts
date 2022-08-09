import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styles: [
  ]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public new_user: any;
  public usuario_guardado: any;

  constructor(private _peticionesService: PeticionesService) {
    this.userId = 1;
    this.fecha = new Date();

    this.new_user = {
      "name": '',
      "job": ''
    }
  }

  ngOnInit(): void {
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;

    // El método subscribe tienes tres funciones call back:
    // 1era: La que recoje el resultado
    // 2da: La otra recoje el posible error
    // 3ra: Se ejecuta cuando finaliza el subscribe
    this._peticionesService.getUser(this.userId).subscribe(
      {
        next: (result) => { this.user = result.data },
        error: (error) => console.log(error),
        complete: () => console.log('Subscribe Peticiones Service Complete')
      }
    );
  }

  onSubmit(form: any) {
    this._peticionesService.addUser(this.new_user).subscribe({
      next: (response) => {
        console.log(response);
        this.usuario_guardado = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
