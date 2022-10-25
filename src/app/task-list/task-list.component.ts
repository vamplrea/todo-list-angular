import {Component, OnInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-task-list",
  templateUrl: "task-list.component.html",
  styleUrls:['task-list.component.css']
})
export class TaskListComponent implements OnInit{

  date = new Date();
  newTaskTitle = "";
  constructor( private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }
  tasks : Task[]= [
    new Task('task 1'),
    new Task('task 2'),
    new Task('task 3'),
    new Task('task 4')];

  add(taskNgForm : NgForm) {
    if(taskNgForm.touched ==false){
      return;
    }
    if(taskNgForm.valid == false){
      return;
    }
    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date:this.date});

  }

  remove(existingTask: Task) {
    var userConfirm = confirm(
      `Do you want to delete the following task ? \n${existingTask.title}`
    );
    if (userConfirm) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }

}
class Task{

  constructor(public title: string) {
    this.title = title;
  }

  public isDone = false;

  toggleIsDone(){
    this.isDone = !this.isDone;
  }
}
