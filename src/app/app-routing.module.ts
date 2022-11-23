import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./pages/about-me/about-me.module').then(m => m.AboutMeModule)
  },
  {
    path: 'my-project',
    loadChildren: () => import('./pages/my-project/my-project.module').then(m => m.MyProjectModule)
  },
  {
    path: 'my-skills',
    loadChildren: () => import('./pages/my-skills/my-skills.module').then(m => m.MySkillsModule)
  },
  {
    path: 'contact-me',
    loadChildren: () => import('./pages/contact-me/contact-me.module').then(m => m.ContactMeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
