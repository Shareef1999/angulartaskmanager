import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardService } from '../dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyprofileComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ DashboardComponent, AboutComponent, MyprofileComponent],
  providers:[DashboardService]
})
export class AdminModule { }
