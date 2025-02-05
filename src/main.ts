import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {routes} from './app/app.routes';
import { provideRouter } from '@angular/router';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';

bootstrapApplication(AppComponent,{
  providers:[provideRouter(routes),
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ]
})
  .catch((err) => console.error(err));
