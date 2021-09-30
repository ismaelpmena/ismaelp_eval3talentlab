import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';

//ng g s services/categoria.services
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
//declarar variable
cate:Categoria={};

  constructor(private http: HttpClient) { 
this.cargarCategorias();
this.cargarCategoriaWEB();
  }

  private cargarCategorias(){
    console.log("cargarCategorias");
// estructura base this.http.get('');
    this.http.get('assets/data/categorias.json').subscribe((respuesta: Categoria)=>{
      this.cate=respuesta;
      console.log("respuesta es ",this.cate);
     // console.log("las categorias son : ",respuesta['frutas']);
    });
  }


  
  private cargarCategoriaWEB(){
    this.http.get('https://learsixela.github.io/productos_json/productos.json').subscribe((respuesta: any)=>{

    console.log("respuesta desde la web: ", respuesta)
    //console.log("los productos son : ", ['productos']);
    });
  }


}
