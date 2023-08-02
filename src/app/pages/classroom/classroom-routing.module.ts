import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassroomComponent } from './classroom.component';
import { ClassroomAddComponent } from './classroom-add/classroom-add.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';

const routes: Routes = [
  {
    path: '',
    component: ClassroomComponent,
    children: [
      {
        path: 'add',
        component: ClassroomAddComponent,
      },
      {
        path: 'list',
        component: ClassroomListComponent,
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
export class ClassroomRoutingModule {
}

