import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateComponent } from './update/update.component';
import { RulesComponent } from './rules/rules.component';

const routes: Routes = [
  { path: 'update', component: UpdateComponent },
  { path: '**', component: RulesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
