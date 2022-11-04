import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, tap, map} from "rxjs";
import {NewTask} from "./new-task.dto";
import {TaskItem} from "./task-item.dto";
import {HttpClient} from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })

const URL = 'http://localhost:3001/tasks';

@Injectable()
export class TasksService {
  private tasks = new BehaviorSubject<TaskItem[]>([]);


  constructor(private httpClient: HttpClient) {
  }

  getAllTasks(date:Date): Observable<TaskItem[]> {
    this.httpClient.get<TaskItem[]>(`${URL}/${date}`)
      .pipe(tap(console.log))
      .pipe(map(TasksService.mapTaskItems))
      .pipe(tap(console.log))
      .subscribe(t => this.tasks.next(t));
    return this.tasks;
  }

  private static mapTaskItems(items: { title: string }[]) {
    return items.map(item => new TaskItem(item.title));
  }

  addTask(date:Date,newTask: NewTask) {
    let updatedTasks = this.tasks.value.concat(new TaskItem(newTask.title));
    console.log("test");
    this.httpClient.post(`${URL}/${date}`, newTask)
      .subscribe(() => this.tasks.next(updatedTasks))
    ;

  }

  removeTask(date:Date, existingTask: TaskItem) {
    let updatedTasks = this.tasks.value.filter((task) => task != existingTask);
    this.httpClient.delete(`${URL}/${date}/${existingTask.title}`)
      .subscribe( () => this.tasks.next(updatedTasks) )
    ;
  }
}
