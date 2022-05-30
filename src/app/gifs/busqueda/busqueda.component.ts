import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor( private gifsService :GifsService) { }

  // termino: string
  buscar() {
    // console.log(termino);
    const valor = this.txtBuscar.nativeElement.value;
    // console.log(valor);
    if(valor.trim().length === 0) {
      return;
    }
    this.txtBuscar.nativeElement.value = '';
    
    this.gifsService.buscarTermino(valor);
  }

}
