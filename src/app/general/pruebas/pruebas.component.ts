import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
/*  Titulo: string = 'curso de angular';
  Fecha: string = formatDate(new Date(), 'dd/MM/yyyy','en');
  Fecha2: number = new Date().getTime();
Mes:number = new Date().getMonth()+1;
nuevoDia:string="";

Dia :number|null|string=null;
Contador: number=0;
dias_semana:string[]=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
eliminado: number|null|string|undefined=null; */

//variables del form
/* email:string|null=null;
password:string|null=""; */


//for (let dia of dias_semana){}


//
  constructor() { }


  ngOnInit(): void {
  }

/* 
//set y get
get getMesNumber():number{
  return this.Mes;
}
get getDiaNumber():number|null|string{
  return this.Dia;
}
get getContadorNumber():number{
  return this.Contador;
}

//metodos o funciones ( logica de negocio k trabajamos en frontend)
obtenerMes(){
  return this.Mes;
}

obtenerDia():void{
  this.Dia =new Date().getDay();
}
sumar(){
  this.Contador++;
}
restar(){

  this.Contador--;
}
agregarDia():void{
  this.dias_semana.push(this.nuevoDia);
}
eliminar():void{
  this.eliminado= this.dias_semana.pop();
}
insertar():void{
console.log("metodo insertar1");
console.log(this.email +""+ this.password);

} */


}
