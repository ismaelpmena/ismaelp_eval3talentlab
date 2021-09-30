import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductosService } from 'src/app/services/productos.service';
import { CarritocomprasService } from 'src/app/services/carritocompras.service';
import { Producto } from 'src/app/interfaces/producto.interface';
@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.component.html',
  styleUrls: ['./carritocompras.component.css']
})
export class CarritocomprasComponent implements OnInit {
// definir variables 
productos:Producto[]=[];
buscar: String = "";
buscarlisto: String|null|number = null;
cantidad: number|null = null;
carritocompras: number[]|any[] = []; 
total: number|null|any = 0;
  constructor(public categoriaService: CategoriaService,
    public productoService: ProductosService,
    public carritocomprasService: CarritocomprasService,
    ) { }
  ngOnInit(): void {
  }
  buscarProducto(){
      //if(this.buscarlisto==this.productos(nombre)) {
       // return this.productos.nombre;
      //}
  }
  updateInfo(id: number|any): void{
// para ver info de un card por separado
  this.carritocomprasService.setTheValueID(id);
    console.log("envio de id: ", id);
  }
  agregarCarrito(id: number|any, valor: number|any):void{
    // para sumar segun lo agregado en el carrito
        this.total = this.total + valor;
        //para agregar al carrito
        this.carritocompras.push(id);
      }
      isIdThere(id: number|any):boolean {
        return this.carritocompras.includes(id);
      }
// con el boton de eliminar elimina lo que se presione
      eliminar(id: number|any, valor: number|any): void {
        this.total =  this.total - valor ;
        let index = this.carritocompras.indexOf(id);
        this.carritocompras.splice(index, 1);
      }
}
