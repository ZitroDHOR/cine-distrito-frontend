import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineDistritoRoutingModule } from './cinedistrito-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    CineDistritoRoutingModule,
    FormsModule
  ]
})
export class CineDistritoModule { }
