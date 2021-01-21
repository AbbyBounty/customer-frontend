import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const AppRoutes: Routes = [
  {
    path: 'dashboard',
   
    pathMatch: 'full',
    component:AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        // loadChildren: './login/LoginComponent'
      }]
  },
  // {
  //   path: 'login',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //  }, 

  {
    path: '',
    component: LoginComponent
    
  },
  {
    path: 'register',
    component: RegisterComponent
    
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
       
      }]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
