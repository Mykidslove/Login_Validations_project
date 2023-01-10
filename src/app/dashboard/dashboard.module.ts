import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../home.service';
import { StuarrayService } from '../stuarray.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
   
  ],
  providers:[HomeService,StuarrayService]
})
export class DashboardModule { }
