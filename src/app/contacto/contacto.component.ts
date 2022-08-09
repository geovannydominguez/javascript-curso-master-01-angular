import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit {

  public usuario: Usuario;

  constructor() {
    this.usuario = new Usuario("", "", "", "");
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

    console.log('Evento onSubmit lanzado');
    console.log(this.usuario);
    
    form.reset();
    
    
  }

}
