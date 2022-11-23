import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {BlogPostPageComponent} from "./components/blog/blog-post-page/blog-post-page.component";
import {ChartsComponent} from "./components/charts/charts.component";

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog', component: BlogPostPageComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '',  pathMatch: 'full', redirectTo: 'contacts'},
  { path: '**',  pathMatch: 'full', redirectTo: 'contacts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
