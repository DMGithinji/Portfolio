import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // Handles layout for rendering the different application modules on signin
  {
    path: '',
    component: ContentComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>  import('@modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'project',
        loadChildren: () => import('@modules/project/project.module').then(m => m.ProjectModule)
      },
    ]
  },

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
