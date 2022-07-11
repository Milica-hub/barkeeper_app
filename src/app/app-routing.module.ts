import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailsSearchComponent } from './cocktails-search/cocktails-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/cocktails', pathMatch: 'full' },
  { path: 'cocktails', component: CocktailsSearchComponent},
  { path: '**', redirectTo: '/cocktails', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
