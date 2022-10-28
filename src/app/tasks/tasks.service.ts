import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { NewTask } from "./new-task.dto";
import { TaskItem } from "./task-item.dto";

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService{
  private tasks = new BehaviorSubject([
    new TaskItem('task 1'),
    new TaskItem('task 2'),
    new TaskItem('task 3'),
    new TaskItem('task 4')]);

  getAllTasks(): Observable<TaskItem[]>{
    return this.tasks;
  }
  addTask(newTask:NewTask){
    let updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    this.tasks.next(updatedTasks);
  }
  removeTask(existingTask:TaskItem){
    let updatedTasks = this.tasks.value.filter((task) => task != existingTask);
    this.tasks.next(updatedTasks);
  }
}
