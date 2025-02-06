import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SubtaskComponent } from './subtask/subtask.component';

export const routes: Routes = [
  {
    path:'',component:TaskComponent,
  },
  {
    path:'subtask/:id',component:SubtaskComponent,
  },
  {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'**',redirectTo:'Home'
  }
];

