import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Task,TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  tasks:Task[]=[];
  newTaskTitle='';

  constructor(private taskservice:TaskService){}
  ngOnInit():void{
    this.tasks=this.taskservice.getTasks();
  }

  addTask():void{
    if(this.newTaskTitle.trim()){
      this.taskservice.addTask(this.newTaskTitle.trim());
      this.newTaskTitle='';
      this.tasks=this.taskservice.getTasks();
    }
  }

  updateTask(task:Task):void{
    this.taskservice.updateTask(task);
  }
}


