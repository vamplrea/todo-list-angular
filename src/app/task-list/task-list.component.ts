import {Component} from "@angular/core";

@Component({
  selector: "app-task-list",
  templateUrl: "task-list.component.html",
  styleUrls:['task-list.component.css']
})
export class TaskListComponent{
  tasks : Task[]= [
    new Task('task 1'),
    new Task('task 2'),
    new Task('task 3'),
    new Task('task 4')];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
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
