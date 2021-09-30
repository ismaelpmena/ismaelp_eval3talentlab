import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()titulo:any=null;
  @Input()detalle:any=null;
  @Input()accion:any=null;
  @Input()fecha:any=null;

mensaje:string|undefined;

@Output() accionModal= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(){
    this.mensaje="Enviando datos al padre"
    this.accionModal.emit(this.accion);
    this.accionModal.emit(this.mensaje);
  }
  capturarVariable(mensaje: any): void {
    console.log("capturarVariable...", mensaje);
  }
}


