import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterNewsRoutingModule } from './register-news-routing.module';
import { RegisterNewsComponent } from './register-news.component';
@NgModule({
  declarations: [RegisterNewsComponent
  ],  
  imports: [    
    RegisterNewsRoutingModule,  
    CommonModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [RegisterNewsComponent],
  
})
export class RegisterNewsModule { }
