import { Injectable } from "@angular/core";
import { NewTask } from "./new-task.dto";
import { TaskItem } from "./task-item.dto";

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService{
  private tasks : TaskItem[]= [
    new TaskItem('task 1'),
    new TaskItem('task 2'),
    new TaskItem('task 3'),
    new TaskItem('task 4')];

  getAllTasks():TaskItem[]{
    return this.tasks;
  }
  addTask(newTask:NewTask){
    this.tasks.push(new TaskItem(newTask.title));
  }
  removeTask(existingTask:TaskItem){
    this.tasks = this.tasks.filter((task) => task != existingTask);
  }
}
