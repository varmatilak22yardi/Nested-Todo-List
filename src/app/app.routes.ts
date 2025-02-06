import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SubtaskComponent } from './subtask/subtask.component';

export const routes: Routes = [
  {
    path:'Home',component:TaskComponent,
  },
  {
    path:'subtask/:id',component:SubtaskComponent,
    data:{
      prerender:false,
    }
  },
  {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'Home'
  }
];

export function getPrerenderParams():Array<{id:string}>{
  return [];
}
