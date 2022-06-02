import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de JavaScript y Angular';
  mostrar_videojuegos: boolean = true;
  config: any;

  constructor() {
    this.config = Configuracion;
    this.title = this.config.titulo;
    
  }

  ocultarVideojuegos(ocultar: boolean) {
    this.mostrar_videojuegos = !ocultar;
  }
}
