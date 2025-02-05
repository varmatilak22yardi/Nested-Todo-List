import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SubtaskComponent } from './subtask/subtask.component';

export const routes: Routes = [
  {
    path:'Home',component:TaskComponent,
    data:{
      RenderMode:'no-prerender'
    }
  },
  {
    path:'subtask/:id',component:SubtaskComponent,
    data:{
      RenderMode:'no-prerender'}
  },
  {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'Home'
  }
];
