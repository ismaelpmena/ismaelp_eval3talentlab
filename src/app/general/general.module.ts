import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { ModalComponent } from './modal/modal.component';
import { ProductoComponent } from './producto/producto.component';

import { CarritocomprasComponent } from './carritocompras/carritocompras.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PagoComponent } from './pago/pago.component';



@NgModule({
  declarations: [
    ProductoComponent,
    PruebasComponent,
    CarritocomprasComponent,
    CategoriaComponent,
    //ModalComponent,
    PagoComponent,
  ],
  
  exports:[
    ProductoComponent,
    PruebasComponent,
    CarritocomprasComponent,
    CategoriaComponent,
    //ModalComponent,
    PagoComponent

  ],
  
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    ]
})
export class GeneralModule { }
