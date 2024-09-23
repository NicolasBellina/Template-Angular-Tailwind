import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'about', component: AboutComponent }, // Page à propos
  { path: 'contact', component: ContactComponent }, // Page contact
];

export { routes }; // Exportation du module routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
