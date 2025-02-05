import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SubtaskComponent } from './subtask/subtask.component';


export const routes: Routes = [
  {
    path:'Home',component:TaskComponent,
    data:{
      getPrerenderParams:()=>[]}
  },
  {
    path:'subtask/:id',component:SubtaskComponent,
    data:{
      getPrerenderParams:()=>[
        {
          id:'0'
        }]}
  },
  {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'Home'
  }
];
