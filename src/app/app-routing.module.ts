import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateComponent } from './components/update/update.component';
import { RulesComponent } from './components/rules/rules.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
  { path: 'update', component: UpdateComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: ':plz', component: RulesComponent },
  { path: '**', component: RulesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
