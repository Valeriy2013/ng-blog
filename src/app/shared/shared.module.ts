import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr'

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule, ToastrModule.forRoot()],
  exports: [CommonModule, FormsModule, MaterialModule, NavbarComponent, RouterModule, ToastrModule],
  declarations: [NavbarComponent]
})
export class SharedModule { }
