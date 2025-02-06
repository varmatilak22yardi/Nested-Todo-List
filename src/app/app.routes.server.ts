import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Server
  },
  {
    path:'subtask/:id',
    renderMode:RenderMode.Server
  },
  {
    path:'Home',
    renderMode:RenderMode.Prerender
  }
];
