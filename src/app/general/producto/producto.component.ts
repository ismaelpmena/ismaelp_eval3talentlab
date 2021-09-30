import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService } from 'src/app/services/productos.service';
import {CarritocomprasService} from 'src/app/services/carritocompras.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
// definir variables 

  constructor(public categoriaService: CategoriaService,
    public productoService: ProductosService,
    public carritocomprasService: CarritocomprasService,
    ){
  }
  ngOnInit(): void {
  }

}
