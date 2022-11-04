import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { TasksService } from "./tasks.service";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[TasksService],
  exports:[
    TaskListComponent
  ]
})
export class TasksModule { }
