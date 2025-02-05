import { Injectable } from "@angular/core";

export interface Subtask{
  id:number;
  title:string;
  completed:boolean;
}

export interface Task{
  id:number;
  title:string;
  subtasks:Subtask[];
}

@Injectable({
  providedIn: 'root'
})

export class TaskService{
  private tasks:Task[]=[];

  constructor(){
    this.loadTasks();
  }

  private loadTasks():void{
    if (typeof window!=='undefined' && window.localStorage)
    {
      const stored=localStorage.getItem('tasks');
       this.tasks=stored?JSON.parse(stored):[];
    }
  }
  private saveTasks():void{
    if (typeof window !== 'undefined' && window.localStorage){
      localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }
  }

  getTasks():Task[]{
    return this.tasks;
  }

  getTaskById(id:number):Task|undefined{
    return this.tasks.find(task=>task.id===id);
  }

  addTask(title:string):void{
    const newTask:Task={id:Date.now(),
      title,subtasks:[]};
      this.tasks.push(newTask);
      this.saveTasks();
    }
    updateTask(updatedTask:Task):void{
      const index=this.tasks.findIndex(task=>task.id===updatedTask.id);
      if (index!=1){
        this.tasks[index]=updatedTask;
        this.saveTasks();
      }
    }
  }

