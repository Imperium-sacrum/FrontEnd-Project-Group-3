import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Portafolio1Component } from './portafolio-1/portafolio-1.component';
import { Portafolio2Component } from './portafolio-2/portafolio-2.component';
import { Portafolio3Component } from './portafolio-3/portafolio-3.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "no1",
    component: Portafolio1Component
  },
  {
    path: "no2",
    component: Portafolio2Component
  },
  {
    path: "no3",
    component: Portafolio3Component
  },
  {
    path:"ref",
    component: ReferencesComponent
  },
  {
    path:"contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
