import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  eliminado: number|null|string|undefined=null;

//variables registro
Anuncio:string|null=null;
nombre:string|null="";
apellido:string|null="";
email:string|null=null;
password:string|null="";

re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  constructor() { }

  ngOnInit(): void {
  }

  insertar():void{
    this.Anuncio = "";
    let nombre1 = String(this.nombre);
    let apellido1 = String(this.apellido);
    let email1 = String(this.email);
    let password1 = String(this.password);

    //no hay caracteres
    if(nombre1.length == 0 || apellido1.length == 0 || email1.length == 0 || password1.length == 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Campo Vacios";
    }

    //espacios en blancos
    if(nombre1.search(" ") >= 0 || apellido1.search(" ") >= 0 || email1.search(" ") >= 0 || password1.search(" ") >= 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Carácteres vacios encontrados";
    }
    
    //validacion de correo
    if(this.re.test(email1)){
      console.log("mail correcto");
    }else{
      console.log("mail incorrecto");
      this.Anuncio = "Correo incorrecto";
    }

    if(nombre1.length < 3 || nombre1.length > 20 || apellido1.length < 3 || apellido1.length > 20) {
		
      this.Anuncio = "Error El de longitud en el apellido/nombre";
			
		}

    console.log("metodo insertar ..........");
    console.log(this.nombre, this.apellido, this.email, this.password);

  }
}
