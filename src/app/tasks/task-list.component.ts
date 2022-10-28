import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import { Observable } from "rxjs";
import { NewTask } from "./new-task.dto";
import {TaskItem} from "./task-item.dto";
import { TasksService } from "./tasks.service";
// import { TasksService } from "./tasks.service";
@Component({
  selector: "app-task-list",
  templateUrl: "task-list.component.html",
  styleUrls:['task-list.component.css'],
  // providers:[TasksService]
})
export class TaskListComponent implements OnInit{

  newTask: NewTask = new NewTask() ;
  tasks: Observable<TaskItem[]> =this.taskService.getAllTasks();
  constructor( private route: ActivatedRoute,private taskService:TasksService){
  }
  ngOnInit(): void {
    let strDate = this.route.snapshot.params['date'];
    this.newTask  = new NewTask(this.newTask.title, new Date(strDate));
  }


  add(taskNgForm : NgForm) {
    if(taskNgForm.touched ==false){
      return;
    }
    this.taskService.addTask(this.newTask);
    taskNgForm.reset({date:this.newTask.date});

  }

  remove(existingTask: TaskItem) {
    var userConfirm = confirm(
      `Do you want to delete the following task ? \n${existingTask.title}`
    );
    if (userConfirm) {
      this.taskService.removeTask(existingTask);
    }
  }

}

