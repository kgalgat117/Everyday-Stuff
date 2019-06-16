import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { reactiveComponent } from './reactive/reactive.component'
import { templateDrivenComponent } from './template-driven/template-driven.component'
import { landingComponent } from './landing/landing.component'

const routes: Routes = [
  {path:'', component:landingComponent},
  {path:'reactive', component: reactiveComponent},
  {path:'template-driven', component: templateDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
  reactiveComponent,
  templateDrivenComponent,
  landingComponent
]