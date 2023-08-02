import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ExercisesAddComponent } from './exercises-add/exercises-add.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { ExercisesEditComponent } from './exercises-edit/exercises-edit.component';
import { ExercisesRoutingModule } from './exercises-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    ExercisesRoutingModule,
  ],
  declarations: [
    ExercisesComponent,
    ExercisesAddComponent,
    ExercisesListComponent,
    ExercisesEditComponent]
})
export class ExercisesModule { }
