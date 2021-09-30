import { Component } from '@angular/core';
import {ProductosService} from './services/productos.service';
import {CategoriaService} from './services/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba1';

  constructor(public productosService: ProductosService, public categoriaService: CategoriaService){
//json o consumo de api
  }
}
