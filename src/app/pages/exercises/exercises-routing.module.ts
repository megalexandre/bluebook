import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesAddComponent } from './exercises-add/exercises-add.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExercisesComponent } from './exercises.component';

const routes: Routes = [
  {
    path: '',
    component: ExercisesComponent,
    children: [
      {
        path: 'add',
        component: ExercisesAddComponent,
      },
      {
        path: 'list',
        component: ExercisesListComponent,
      },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ExercisesRoutingModule {
}

