import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../general/modal/modal.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    
  ],
  exports:[
    
    LoginComponent, 
    RegistroComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ]
})
export class LoginModule { }
