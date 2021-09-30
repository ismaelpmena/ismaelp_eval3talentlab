import { Injectable } from "@angular/core";
import { Producto, Lista_productos } from "../interfaces/producto.interface";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductosService{
//declarar variable
productos:Producto[]=[];
lista_productos: Lista_productos = {};
    constructor(private http: HttpClient){
        this.cargarProductos();
        console.log("este es de producto service asd");
    }

    private cargarProductos(){
    // estructura base this.http.get('');
        this.http.get('assets/data/productos.json').subscribe((res:Producto|any)=>{
        this.productos=res.productos;
        console.log("los productos son asd : ",res['productos']);
        this.lista_productos = res;
    
    });
    }

}