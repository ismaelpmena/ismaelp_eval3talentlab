import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lista_pagos, Pago } from '../interfaces/pago.interface';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
//declarar variable
pagos:Pago[]=[];
lista_pagos: Lista_pagos = {};
  constructor(private http: HttpClient) { 
    this.cargarPagos();
    console.log("este es de pagos service asd");
  }
  cargarPagos(){
    this.http.get('assets/data/pago.json').subscribe((res:Pago|any)=>{
      this.pagos=res.pago;
      console.log("los pagos son asd : ",res['pagos']);
      this.lista_pagos = res;
  
  });
  }
}
