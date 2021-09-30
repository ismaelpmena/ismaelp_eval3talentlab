import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  mensaje:string="";

  //nombre:string|null=null;
  nombre:string="";
  email:string="";
  password:string="";

  constructor() { }




  ngOnInit(): void {
  }

  insertar():void{
 
    console.log(" metodo insertar ...");
    if( this.validarNombre() && this.validarEmail() && this.validarPassword()){
      console.log("Email: "+this.email);
      console.log("Password: "+this.password);
      this.nombre.push(this.nombre);
      this.
    }else {
      console.log("No validado");
    }
  }

  validarNombre():boolean {
    if(this.nombre.trim().length == 0){
      this.mensaje="Nombre no puede estar vacio";
      return false;
    }
    else if(this.nombre.length > 10){
      this.mensaje="Nombre maximo 10 caracteres";
      return false;
    }
    else{
      console.log("Nombre: "+this.nombre);
      return true;
    }
  }
  validarEmail(): boolean {
    
    if (this.email.trim().length > 0) {
      console.log("El campo contiene un string válido que no son espacios");
      if (this.email.indexOf('@', 0) == -1 || this.email.indexOf('.', 0) == -1) {
        //alert('El correo electrónico introducido no es correcto.');
        this.mensaje="El correo electronico no es correcto";
        console.log("Email: "+this.email);
        return false;
      } 
      else{
        return true;
      }

    } else {
      //alert("El campo contiene espacios o está vacío");
      this.mensaje="El campo contiene espacios o está vacío";
      return false;
    }

  }
  validarPassword(): boolean{
    if (this.password.trim().length==0) {
      //alert("Campo vacio");
      this.mensaje="No pueden haber campos vacios"
      return false;
    } 
    else if (this.password.length > 8) {
      this.mensaje="Password maximo 8 caracteres";
      return false;
    } 
    else {
      console.log("Pass: "+this.password);
      return true;
    }

    }

    validarConfirPassword(): boolean{
      if (this.passwordConfirm.trim().length == 0) {
        this.mensaje="No pueden hacer campos vacios";
        return false;
      }

      else if(this.passwordConfirm.length > 8 ){
        console.log("Pass: "+this.passwordConfirm);
        this.mensaje="Password maximo 8 caracteres";
        return false;
      }

      else if(this.password != this.passwordConfirm){
        console.log("ConfirmPass: "+this.passwordConfirm);
        this.mensaje="Las pass no son iguales";
        return false;

      }
      else{
        console.log("bien");
        return true;
      }

    }
 /*  eliminarDeTabla(id: number|any,): void {

    let index = this.arrayCodigo.indexOf(id);
    this.arrayCodigo.splice(index, 1);

    index = this.arrayNombre.indexOf(id);
    this.arrayNombre.splice(index, 1);

    index = this.arrayPrecio.indexOf(id);
    this.arrayPrecio.splice(index, 1);

    index = this.arrayStock.indexOf(id);
    this.arrayStock.splice(index, 1);

    index = this.arrayIds.indexOf(id);
    this.arrayIds.splice(index, 1);
  } */
}
