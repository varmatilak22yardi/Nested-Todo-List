import { Component,OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TaskService,Task,Subtask} from '../task.service';
import { ActivatedRoute,Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-subtask',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './subtask.component.html',
  styleUrl: './subtask.component.scss'
})
export class SubtaskComponent implements OnInit{
  task:Task | undefined;
  newSubtaskTitle='';

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private taskService:TaskService
  ){}

  ngOnInit(): void {
      const taskId=Number(this.route.snapshot.paramMap.get('id'));
      this.task=this.taskService.getTaskById(taskId);
  }

  addSubtask():void{
    if(this.task && this.newSubtaskTitle.trim()){
      const newSubtask:Subtask={
        id:Date.now(),
        title:this.newSubtaskTitle.trim(),
        completed:false
      };
      this.task.subtasks.push(newSubtask);
      this.newSubtaskTitle='';
      this.updateTask();
    }
  }
  removeSubtask(subtaskId:number):void{
    if (this.task){
      this.task.subtasks=this.task.subtasks.filter(st=>st.id!==subtaskId);
      this.updateTask();
    }
  }
  updateTask():void{
    if (this.task){
      this.taskService.updateTask(this.task);
    }
  }
  goHome():void{
    this.router.navigate(['/Home']);
  }
}
