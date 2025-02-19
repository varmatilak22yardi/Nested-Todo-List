import { Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { SubtaskComponent } from './subtask/subtask.component';

export const routes: Routes = [
  {
    path: '', component: TaskComponent, // default route
  },
  {
    path: 'subtask/:id', component: SubtaskComponent, // dynamic route
  },
  {
    path: '**', redirectTo: '', // wildcard route
  }
];
