import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAuthGuard } from '@app/guard/no-auth.guard';
import { AuthGuard } from '@app/guard/auth.guard';

import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';

// The application modules paths
const restaurantRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () =>  import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: 'profile',
      loadChildren: () =>  import('@modules/profile/profile.module').then(m => m.ProfileModule)
    },
]

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  // Handles layout for rendering the different application modules on signin
  {
    path: '',
    component: ContentLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>  import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'profile',
        loadChildren: () =>  import('@modules/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  },
  // Handles signin, signup and forgot password
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Handles errors such as 404 or 500
  {
    path: 'error',
    component: ErrorPageComponent,
    loadChildren: () => import('@modules/error/error.module').then(m => m.ErrorModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
