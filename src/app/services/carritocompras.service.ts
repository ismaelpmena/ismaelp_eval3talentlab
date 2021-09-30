import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lista_productos, Producto } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class CarritocomprasService {
  setTheValueID(id: any) {
    throw new Error('Method not implemented.');
  }

  url: string = "assets/data/productos.json";
  produ: Producto = {};
  listaproductos: Lista_productos = {};

  constructor(private http: HttpClient,) {
    console.log("carrito de compras. service funcionando");

    this.cargaProductos();
  }
  public cargaProductos(){
    this.http.get(this.url).subscribe( (respuesta: Producto|any) => {
      this.produ = respuesta;
      this.listaproductos = respuesta;
      
    });


  }




}
