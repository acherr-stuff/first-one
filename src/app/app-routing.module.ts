import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ChartsComponent} from "./components/charts/charts.component";
import {BlogPostPageComponent} from "./components/blog/pages/blog-post-page/blog-post-page.component";
import {BlogPageComponent} from "./components/blog/pages/blog-page/blog-page.component";

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog/view', component: BlogPostPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'charts', component: ChartsComponent },
  { path: '',  pathMatch: 'full', redirectTo: 'contacts'},
  { path: '**',  pathMatch: 'full', redirectTo: 'contacts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
